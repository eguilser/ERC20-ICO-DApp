// scripts/deploy.js
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  // 1) Suministro inicial: 1 000 000 tokens con 18 decimales
  const initialSupply = ethers.parseUnits("1000000", 18);

  // 2) Desplegar MyToken
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initialSupply);
  // Esperar a que efectivamente esté desplegado:
  await myToken.waitForDeployment();
  console.log("MyToken desplegado en:", myToken.target);

  // 3) Tasa: 1 Ether → 1000 tokens
  const tokenRate = 1000;

  // 4) Desplegar TokenSale
  const TokenSale = await ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(myToken.target, tokenRate);
  await tokenSale.waitForDeployment();
  console.log("TokenSale desplegado en:", tokenSale.target);

  console.log("Despliegue completo. Ahora recuerda ejecutar tu script de approve si lo necesitas.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
