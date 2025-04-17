# 🔥 **ERC20 ICO DApp**

A complete decentralized application (DApp) that simulates an Initial Coin Offering (ICO) for an ERC‑20 token. Built with **Hardhat**, **Solidity**, **React**, **Ethers.js**, **Bootstrap** and **MetaMask**.

---

## 🚀 **Key Features**

- **ERC‑20 Token:** Standard token contract via OpenZeppelin  
- **Token Sale Contract:** Buy tokens at a fixed rate with Ether  
- **Automated Tests:** Hardhat + Mocha/Chai tests  
- **Approval Flow:** Demonstrates `approve`/`transferFrom` pattern  
- **React Frontend:** Intuitive UI with React & Bootstrap  
- **MetaMask Integration:** Connect wallet, view balances, purchase tokens  

---

## 🧰 **Technologies Used**

- **Solidity & OpenZeppelin** — Smart contract development  
- **Hardhat** — Local blockchain, compilation, testing  
- **Mocha & Chai** — Automated contract tests  
- **React** — Frontend framework  
- **Ethers.js** — Blockchain interactions  
- **React Bootstrap** — UI components  
- **MetaMask** — Wallet provider  

---

## 📂 **Project Structure**

```plaintext
erc20-ico-project/
├── contracts/
│   ├── MyToken.sol          # ERC‑20 token contract
│   └── TokenSale.sol        # ICO sale contract
├── scripts/
│   ├── deploy.js            # Deploy contracts
│   └── approve.js           # Grant allowance to sale contract
├── test/
│   └── tokenSale-test.js    # Tests for sale contract
├── hardhat.config.js        # Hardhat configuration
├── package.json             # Backend dependencies & scripts
├── .env                     # Environment variables (not committed)
└── my-dapp/                 # React frontend
    ├── src/
    │   ├── abi/
    │   │   ├── MyToken.json     # ABI for MyToken
    │   │   └── TokenSale.json   # ABI for TokenSale
    │   ├── components/
    │   │   ├── ConnectWallet.js
    │   │   ├── TokenInfo.js
    │   │   └── PurchaseTokens.js
    │   ├── App.js
    │   └── index.js
    ├── package.json             # Frontend dependencies & scripts
    └── .env                     # Frontend env vars (REACT_APP_...)

---

## ⚙️ Setup & Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/erc20-ico-project.git
   cd erc20-ico-project
