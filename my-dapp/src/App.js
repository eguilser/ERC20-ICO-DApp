// src/App.js
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ConnectWallet from './components/ConnectWallet';
import PurchaseTokens from './components/PurchaseTokens';
import TokenInfo from './components/TokenInfo';

// Usar las variables de entorno
const MY_TOKEN_ADDRESS = process.env.REACT_APP_MY_TOKEN_ADDRESS;
const TOKEN_SALE_ADDRESS = process.env.REACT_APP_TOKEN_SALE_ADDRESS;
const TOKEN_RATE = process.env.REACT_APP_TOKEN_RATE;

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  // Inicializar el proveedor de ethers cuando se cargue el componente
  useEffect(() => {
    if (window.ethereum) {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(newProvider);
    } else {
      console.error("MetaMask no está disponible");
    }
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>DApp ICO y Token ERC-20</h1>
          <ConnectWallet setWalletAddress={setWalletAddress} />
          {walletAddress ? (
            <>
              <p>Cuenta conectada: {walletAddress}</p>
              <TokenInfo 
                walletAddress={walletAddress} 
                myTokenAddress={MY_TOKEN_ADDRESS} 
                provider={provider}
              />
              <PurchaseTokens 
                walletAddress={walletAddress} 
                tokenSaleAddress={TOKEN_SALE_ADDRESS} 
                provider={provider} 
                tokenRate={TOKEN_RATE}
              />
            </>
          ) : (
            <p>Conecta tu billetera para interactuar con la DApp.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

console.log("MY_TOKEN_ADDRESS:", process.env.REACT_APP_MY_TOKEN_ADDRESS);
console.log("TOKEN_SALE_ADDRESS:", process.env.REACT_APP_TOKEN_SALE_ADDRESS);
console.log("TOKEN_RATE:", process.env.REACT_APP_TOKEN_RATE);



export default App;
