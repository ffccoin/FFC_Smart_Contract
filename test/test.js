const { expect } = require("chai");

describe("ForceFinanceCoin", function () {
  let ForceFinanceCoin;
  let forceFinanceCoin;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    ForceFinanceCoin = await ethers.getContractFactory("ForceFinanceCoin");
    forceFinanceCoin = await ForceFinanceCoin.deploy(owner.address);
    await forceFinanceCoin.deployed();
  });

  it("Should have correct name, symbol, and initial supply", async function () {
    const name = await forceFinanceCoin.name();
    const symbol = await forceFinanceCoin.symbol();
    const decimals = await forceFinanceCoin.decimals();
    const initialSupply = await forceFinanceCoin.totalSupply();

    expect(name).to.equal("ForceFinanceCoin");
    expect(symbol).to.equal("$FFC");
    expect(initialSupply).to.equal(ethers.BigNumber.from("5000000000").mul(ethers.BigNumber.from(10).pow(decimals)));
    expect(await forceFinanceCoin.balanceOf(owner.address)).to.equal(initialSupply);
  });

  it("Should pause and unpause", async function () {
    await forceFinanceCoin.pause();
    expect(await forceFinanceCoin.paused()).to.be.true;

    await forceFinanceCoin.unpause();
    expect(await forceFinanceCoin.paused()).to.be.false;
  });

  it("Should mint tokens to a specified address", async function () {
    const amount = 1000;
    await forceFinanceCoin.mint(addr1.address, amount);
    expect(await forceFinanceCoin.balanceOf(addr1.address)).to.equal(amount);
  });


});
