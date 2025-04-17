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

## 📂 Project Structure

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

⚙️ Setup & Installation
1. Clone the Repository
bash
Copy
git clone https://github.com/your-username/erc20-ico-project.git
cd erc20-ico-project
2. Install Backend Dependencies
bash
Copy
npm install
3. Compile & Test Contracts
bash
Copy
npx hardhat compile
npx hardhat test
4. Start Local Blockchain
bash
Copy
npx hardhat node
🌐 Deploy & Approve
Deploy Contracts (in a new terminal)
bash
Copy
npx hardhat run scripts/deploy.js --network localhost
→ Copy the printed contract addresses for MyToken and TokenSale.

Grant Allowance to TokenSale
bash
Copy
npx hardhat run scripts/approve.js --network localhost
→ Confirms TokenSale can transfer tokens on your behalf.

⚛️ Frontend (React App)
1. Navigate to Frontend
bash
Copy
cd my-dapp
npm install
2. Configure Environment Variables
Create .env file with:

ini
Copy
REACT_APP_MY_TOKEN_ADDRESS=0xYourTokenAddress
REACT_APP_TOKEN_SALE_ADDRESS=0xYourSaleAddress
REACT_APP_TOKEN_RATE=1000
→ Use lowercase addresses. Restart server after changes.

3. Run the DApp
bash
Copy
npm start
👉 Open http://localhost:3000

🎯 Usage Flow
Connect Wallet: Click "Connect MetaMask" and approve connection

View Balances: See your ETH and token balances

Buy Tokens: Enter ETH amount and confirm transaction

Check Balance: View updated token balance after purchase

🔍 Verify On Hardhat Console
bash
Copy
npx hardhat console --network localhost
> const token = await ethers.getContractAt("MyToken", process.env.REACT_APP_MY_TOKEN_ADDRESS)
> await token.balanceOf("YOUR_WALLET_ADDRESS")
👤 Author
Name: Sergio Eguíluz

Email: sergioeguiluz614@gmail.com

GitHub: your-username

📜 License
MIT License - See LICENSE for details.

🤝 Contributing
Fork this repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Happy building! 🚀✨
