const { expect } = require("chai");

describe("ForceFinanceCoin", function () {
  let ForceFinanceCoin;
  let owner;
  let addr1;
  let addr2;
  let forceFinanceCoin;

  beforeEach(async function () {
    ForceFinanceCoin = await ethers.getContractFactory("ForceFinanceCoin");
    [owner, addr1, addr2] = await ethers.getSigners();
    forceFinanceCoin = await ForceFinanceCoin.deploy(
      "Force Finance Coin",
      "$FFC",
      ethers.utils.parseUnits("5000000000", 18),
      owner.address
    );
    await forceFinanceCoin.deployed();
  });

  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await forceFinanceCoin.balanceOf(owner.address);
    expect(ownerBalance.toString()).to.equal(
      ethers.utils.parseUnits("5000000000", 18).toString()
    );
  });

  it("Should transfer tokens between accounts", async function () {
    await forceFinanceCoin.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
    const addr1Balance = await forceFinanceCoin.balanceOf(addr1.address);
    expect(addr1Balance.toString()).to.equal(ethers.utils.parseUnits("100", 18).toString());

    await forceFinanceCoin.connect(addr1).transfer(addr2.address, ethers.utils.parseUnits("50", 18));
    const addr2Balance = await forceFinanceCoin.balanceOf(addr2.address);
    expect(addr2Balance.toString()).to.equal(ethers.utils.parseUnits("50", 18).toString());
  });

  it("Should burn tokens", async function () {
    await forceFinanceCoin.burn(ethers.utils.parseUnits("100", 18));
    const ownerBalance = await forceFinanceCoin.balanceOf(owner.address);
    expect(ownerBalance.toString()).to.equal(ethers.utils.parseUnits("4999999900", 18).toString());
  });

  it("Should fail if sender doesn't have enough tokens", async function () {
    await expect(async () => {
      await forceFinanceCoin.connect(addr1).transfer(owner.address, ethers.utils.parseEther("1"));
    }).to.throw;
  });

});
