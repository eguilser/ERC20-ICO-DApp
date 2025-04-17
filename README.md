# 🔥 **ERC-20 ICO DApp: Token Sale Platform with Hardhat & React**

Welcome to the **ERC20 ICO DApp**, a decentralized application that simulates an Initial Coin Offering (ICO) for an ERC-20 token. Built with **Hardhat**, **Solidity**, **React**, and **Ethers.js**, this project showcases a complete Web3 workflow from smart contract development to frontend integration.

---

## 📃 Table of Contents

- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Setup Guide](#-setup-guide)
  - [Backend Setup](#-1-backend-setup)
  - [Frontend Setup](#-2-frontend-setup)
- [🚀 Deployment](#-deployment)
- [Available Scripts](#-available-scripts)
- [🎯 Usage](#-usage)
- [📸 Screenshots](#-screenshots)
- [🔍 Verify on Hardhat Console](#-verify-on-hardhat-console)
- [📅 Gitignore](#-gitignore)
- [📄 License](#-license)
- [👤 Author](#-author)

## 📝 Description

This project is a smart contract-based token sale system where users can buy ERC-20 tokens in exchange for Ether. It uses two main contracts:

- `MyToken`: The ERC-20 token.
- `TokenSale`: Handles the token sale process.

The frontend provides an intuitive interface to interact with the blockchain using MetaMask.

## 🛠️ Technologies Used

**Backend:**

- Solidity
- Hardhat
- Mocha / Chai

**Frontend:**

- React
- Bootstrap
- Ethers.js
- MetaMask

**Tools:**

- Node.js
- Visual Studio Code

## 📂 Project Structure

```
erc20-ico-project/
├── contracts/
│   ├── MyToken.sol          # ERC‑20 token contract
│   └── TokenSale.sol        # ICO sale contract
├── scripts/
│   ├── deploy.js            # Deploy contracts
│   └── approve.js           # Grant allowance to sale contract
├── test/
│   └── tokenSale-test.js    # Tests for sale contract
├── hardhat.config.js        # Hardhat config
├── package.json             # Backend deps & scripts
├── .env                     # Backend env vars (not committed)
└── my-dapp/                 # React frontend
    ├── src/
    │   ├── abi/
    │   │   ├── MyToken.json     # ABI of MyToken
    │   │   └── TokenSale.json   # ABI of TokenSale
    │   ├── components/
    │   │   ├── ConnectWallet.js
    │   │   ├── TokenInfo.js
    │   │   └── PurchaseTokens.js
    │   ├── App.js
    │   └── index.js
    ├── package.json             # Frontend deps & scripts
    └── .env                     # Frontend env vars (REACT_APP_...)
```

## ⚙️ Setup Guide

### 🔹 1. Backend Setup

✅ Clone the repository:

```bash
git clone https://github.com/your-username/erc20-ico-project.git
cd erc20-ico-project
```

✅ Install dependencies:

```bash
npm install
```

✅ Compile & test contracts:

```bash
npx hardhat compile
npx hardhat test
```

✅ Start local Hardhat node:

```bash
npx hardhat node
```

The JSON-RPC endpoint will be available at:  
`http://127.0.0.1:8545`

### 🔹 2. Frontend Setup

✅ Navigate to the frontend directory:

```bash
cd my-dapp
```

✅ Install frontend dependencies:

```bash
npm install
```

✅ Configure environment variables:

Create a `.env` file inside `my-dapp/` and add:

```env
REACT_APP_MY_TOKEN_ADDRESS=0xe7f1725e7734ce288f8367e1bb143e90bb3f0512
REACT_APP_TOKEN_SALE_ADDRESS=0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
REACT_APP_TOKEN_RATE=1000
```

📌 *Note: Always use lowercase addresses and restart the dev server after editing the .env file.*

✅ Run the React app:

```bash
npm start
```

The app will be available at:  
`http://localhost:3000`

## 🚀 Deployment

### 🔹 Deploy Contracts (in a new terminal with Hardhat node running):

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Copy the printed contract addresses for `MyToken` and `TokenSale`.

### 🔹 Grant Allowance:

```bash
npx hardhat run scripts/approve.js --network localhost
```

This allows the sale contract to transfer tokens on behalf of the owner.

## 🛠️ Available Scripts

**Backend (project root):**

- `npx hardhat compile` — Compile contracts
- `npx hardhat test` — Run tests
- `npx hardhat node` — Start local blockchain
- `npx hardhat run scripts/deploy.js` — Deploy contracts
- `npx hardhat run scripts/approve.js` — Grant token allowance

**Frontend (`my-dapp/`):**

- `npm start` — Launch development server
- `npm run build` — Build React app for production

## 🎯 Usage

1. Start Hardhat node (see **Backend Setup**).
2. Deploy and approve contracts (see **Deployment**).
3. Run the React DApp (see **Frontend Setup**).
4. Connect MetaMask to `http://127.0.0.1:8545` (Chain ID: `31337`).
5. Interact via the UI:  
   - Connect your wallet  
   - View token balance  
   - Purchase tokens

## 📸 Screenshots

- ✅ Connect Wallet
  ![erc20-ico-project_front1](https://github.com/user-attachments/assets/bb0e50aa-5fb4-49b1-a1bb-2a76154d415a)

- ✅ View Token Balance  
- ✅ Purchase Tokens Flow
-  ![erc20-ico-project_compra](https://github.com/user-attachments/assets/115d9974-4424-4042-b777-72866d1fccea)
```

## 🔍 Verify on Hardhat Console

To manually check balances via the Hardhat console:

```bash
npx hardhat console --network localhost
```

Inside the console:

```js
const token = await ethers.getContractAt("MyToken", process.env.REACT_APP_MY_TOKEN_ADDRESS);
await token.balanceOf("YOUR_WALLET_ADDRESS");
```

## 📅 Gitignore

```
node_modules/
artifacts/
cache/
build/
.env
```

## 📄 License

This project is licensed under the **MIT License**.  
See the LICENSE file for more details.

## 👤 Author

**Name:** Sergio Eguíluz  
**Email:** sergioeguiluz614@gmail.com  
**GitHub:** [eguilser]([https://github.com/your-username])

---

**Happy coding! 🚀**

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Happy building! 🚀✨
