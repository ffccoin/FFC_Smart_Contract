const { ethers } = require("hardhat");

async function main() {

  console.log("start");
  /////creating token /////////////
  [Owner, otherAccount1, otherAccount2, otherAccount3, otherAccount4] =
    await ethers.getSigners();


  // let forceCoin  0x42451B6Ba17080C44D5cEc86D828e628EBcEC798

  // const forceCoin = await ethers.getContractFactory("ForceCoin")
  // const ForceCoin = await forceCoin.deploy();
  // await ForceCoin.deployed();
  // console.log("forceCoin contract address", ForceCoin.address);

  // const usdcToken = await ethers.getContractFactory("USDCToken")
  // const USDCToken = await usdcToken.deploy();
  // await USDCToken.deployed();
  // console.log("USDCToken contract address", USDCToken.address);

  // const usdtToken = await ethers.getContractFactory("USDTToken")
  // const USDTToken = await usdtToken.deploy();
  // await USDTToken.deployed();
  // console.log("USDTToken contract address", USDTToken.address);

  let ForceCoin = "0x42451B6Ba17080C44D5cEc86D828e628EBcEC798" //sepolia
  let USDCToken = "0x89D0c4bC30ff91E0561A5bB2657c68efc3E710Ee" //sepolia
  let USDTToken = "0x808dd1337bB656C173fA7A5eb7F0263fabC97815" //sepolia
  // let forcePreSaleContract = "0x46ffE9383A30A262B0D3ADa748D4BD4931D1CCa2"


  const forcePreSaleContract = await ethers.getContractFactory("ForcePreSaleContract")
  const ForcePreSaleContract = await forcePreSaleContract.deploy(USDTToken, USDCToken, ForceCoin);
  await ForcePreSaleContract.deployed();
  console.log("forcePreSaleContract contract address", ForcePreSaleContract.address);

  //   let tokens = ethers.utils.parseEther("100000")

  await ForcePreSaleContract.startTheSale();
  // await USDTToken.transfer(otherAccount1.address,tokens);
  // await USDTToken.transfer(otherAccount2.address,tokens);
  // await USDCToken.transfer(otherAccount1.address,tokens);
  // await USDCToken.transfer(otherAccount2.address,tokens);


  // Save copies of each contracts abi and address to the frontend.

  saveFrontendFiles(ForcePreSaleContract.address, "ForcePreSaleContract");
  // saveFrontendFiles(ForceCoin.address , "ForceCoin");
  // saveFrontendFiles(USDCToken.address , "USDCToken");
  // saveFrontendFiles(USDTToken.address , "USDTToken");

}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);
  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
