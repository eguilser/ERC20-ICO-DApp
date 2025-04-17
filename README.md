# 🔥 **ERC-20 ICO DApp: Token Sale Platform with Hardhat & React**

Welcome to the **ERC20 ICO DApp**, a decentralized application that simulates an Initial Coin Offering (ICO) for an ERC-20 token. Built with **Hardhat**, **Solidity**, **React**, and **Ethers.js**, this project showcases a complete Web3 workflow from smart contract development to frontend integration.

---

## 📚 **Table of Contents**
1. [Key Features](#-key-features)
2. [Technologies Used](#-technologies-used)
3. [Project Structure](#-project-structure)
4. [Setup & Installation](#%EF%B8%8F-setup--installation)
5. [Deployment & Approval](#-deploy--approve)
6. [Frontend Setup](#%EF%B8%8F-frontend-react-app)
7. [Usage Flow](#-usage-flow)
8. [Hardhat Console Verification](#-verify-on-hardhat-console)
9. [Author](#-author)
10. [License](#-license)
11. [Contributing](#-contributing)

---

## 🚀 **Key Features**

- **ERC-20 Token**: Standard token contract via OpenZeppelin  
- **Token Sale Contract**: Buy tokens at a fixed rate with Ether  
- **Automated Tests**: Hardhat + Mocha/Chai test coverage  
- **Approval Flow**: Demonstrates `approve`/`transferFrom` pattern  
- **React Frontend**: Intuitive UI with React & Bootstrap  
- **MetaMask Integration**: Connect wallet, view balances, purchase tokens  

---

## 🛠️ **Technologies Used**

| Layer             | Technology               |
|-------------------|--------------------------|
| Smart Contracts   | Solidity, OpenZeppelin   |
| Development Tool  | Hardhat                  |
| Testing           | Mocha, Chai              |
| Frontend          | React (TypeScript)       |
| Blockchain Library| Ethers.js                |
| UI Framework      | React Bootstrap         |
| Wallet Integration| MetaMask                |

---

## 📂 **Project Structure**

```plaintext
erc20-ico-project/
├── contracts/
│   ├── MyToken.sol          # ERC-20 token contract
│   └── TokenSale.sol        # ICO sale contract
├── scripts/
│   ├── deploy.js            # Deployment script
│   └── approve.js           # Allowance approval script
├── test/
│   └── tokenSale-test.js    # Contract tests
├── hardhat.config.js        # Hardhat configuration
└── my-dapp/                 # React frontend
    ├── src/
    │   ├── abi/             # Contract ABIs
    │   ├── components/      # React components
    │   ├── App.js           # Main application
    │   └── index.js         # Entry point
