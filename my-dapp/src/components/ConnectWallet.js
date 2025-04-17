// src/components/ConnectWallet.js
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const ConnectWallet = ({ setWalletAddress }) => {
  const [error, setError] = useState('');

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError('MetaMask no está instalado. Por favor, instálalo para continuar.');
        return;
      }
      // Solicitar conexión a MetaMask
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error(err);
      setError('Error al conectar la billetera.');
    }
  };

  return (
    <div className="my-3">
      {error && <Alert variant="danger">{error}</Alert>}
      <Button onClick={connectWallet}>Conectar MetaMask</Button>
    </div>
  );
};

export default ConnectWallet;
