# Force Finance Coin

## Overview

Force Finance Coin is an ERC-20 token implemented using the Hardhat development framework for Ethereum smart contracts. It provides functionalities such as minting, burning, pausing, and permitting token transfers. The token is designed to be used in decentralized finance (DeFi) applications, decentralized exchanges (DEXs), and other Ethereum-based projects.

## Contract Address

0xbf05C4023E735aDb912E2cc34c0f391702efEC34

## Features

- ERC-20 compliance: Implements the ERC-20 standard for compatibility with Ethereum wallets, exchanges, and other applications.
- Minting and burning: Allows token minting and burning by the contract owner.
- Pausing: Provides the ability to pause and unpause token transfers.
- Permitting: Implements the permit function for gasless meta transactions.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>

cd force-finance-coin
npm install

npx hardhat test

npx hardhat run scripts/deploy.js --network <network>

Replace <network> with the desired network (e.g., localhost, goerli, ethereum mainnet).
```

## Configuration

- The project is configured with Hardhat for Ethereum smart contract development. The configuration file hardhat.config.js contains network settings, compiler options, and other project configurations.

## Contributing

- Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, feature enhancements, or other improvements.

## License

- This project is licensed under the MIT License. See the LICENSE file for details.
