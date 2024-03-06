const { ethers } = require("hardhat");

async function main() {
  // Specify the constructor arguments
  const initialOwner = "0xB3140bfd68B7b95DC61a2C71f5462aC98D86EF27";

  // Deploy the contract with constructor arguments
  const ForceFinanceCoin = await ethers.getContractFactory("ForceFinanceCoin");
  const forceFinanceCoin = await ForceFinanceCoin.deploy(initialOwner); // Pass the initialOwner as an argument

 

  await forceFinanceCoin.deployed();

  console.log("ForceFinanceCoin deployed to:", forceFinanceCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
