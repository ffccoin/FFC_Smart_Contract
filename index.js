require('dotenv').config(); // Import dotenv to read environment variables
const { ethers } = require("ethers");

// Define your ERC20 contract ABI
const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
];


const contractAddress = "0xbf05C4023E735aDb912E2cc34c0f391702efEC34";

async function main() {
  
  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/b725d626b2e9485f9e5ae8366b22cb55");

  // Create a new instance of the ERC20 contract
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Get the name of the token
  const name = await contract.name();
  console.log("Token Name:", name);

  // Get the symbol of the token
  const symbol = await contract.symbol();
  console.log("Token Symbol:", symbol);

  // Get the balance of an address (replace with your address)
  const address = "0xB3140bfd68B7b95DC61a2C71f5462aC98D86EF27"; // Replace with your Ethereum address
  const balance = await contract.balanceOf(address);
  console.log(`Balance of ${address}:`, ethers.utils.formatUnits(balance, 18));

  // Example: Transfer tokens to another address
  const recipient = "0xB3140bfd68B7b95DC61a2C71f5462aC98D86EF27"; // Replace with recipient's Ethereum address
  const amount = ethers.utils.parseUnits("10", 18); // 10 tokens

  // Retrieve private key from environment variable
  const privateKey = process.env.PRIVATE_KEY;

  // Create a wallet instance from the private key
  const wallet = new ethers.Wallet(privateKey, provider);

  // Connect the wallet to the contract
  const connectedContract = contract.connect(wallet);

  // Send the transaction
  const tx = await connectedContract.transfer(recipient, amount);
  console.log("Transfer Transaction Hash:", tx.hash);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
