require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");

module.exports = {
   solidity: {
      compilers: [
         {
            version: "0.8.20",
            settings: {}
         },
         {
            version: "0.8.11",
            settings: {}
         }
      ]
   },
   defaultNetwork: "etherscan",
   networks: {
      etherscan: {
         url: process.env.ETH_URL,
         accounts: [process.env.PRIVATE_KEY],
      },
    
      verify: {
         // Define the URL and accounts for the verify network
         url: "https://eth-goerli.alchemyapi.io/v2/your-alchemy-api-key", // Update this URL with your own Alchemy API key or other provider URL
         accounts: [process.env.PRIVATE_KEY]
      }
   },
   etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY
   },

   sourcify: {
      enabled: true
    }
};
