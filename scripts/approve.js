// scripts/approve.js
const hre = require("hardhat");

async function main() {
  // Pon aquí las direcciones en minúscula de tu despliegue:
  const tokenAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
  const saleAddress  = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

  // Conectar al contrato MyToken
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken  = MyToken.attach(tokenAddress);

  // Dar permiso a TokenSale para mover TODOS los tokens
  const tx = await myToken.approve(saleAddress, hre.ethers.MaxUint256);
  await tx.wait();

  console.log("✅ Aprobación completada: TokenSale puede transferir todos los tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

