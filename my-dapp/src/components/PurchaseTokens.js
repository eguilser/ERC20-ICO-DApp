// src/components/PurchaseTokens.js
import { ethers } from 'ethers';
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import TokenSaleABI from '../abi/TokenSale.json';

const PurchaseTokens = ({ walletAddress, tokenSaleAddress, provider, tokenRate }) => {
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePurchase = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!walletAddress) {
      setMessage('Debes conectar tu billetera.');
      return;
    }
    try {
      // Convertir la cantidad ingresada a bigint (ethers.parseEther devuelve bigint en ethers v6)
      const value = ethers.parseEther(purchaseAmount);
      
      // Obtener el signer desde el provider a partir de la dirección conectada
      const signer = await provider.getSigner(walletAddress);
      const tokenSaleContract = new ethers.Contract(tokenSaleAddress, TokenSaleABI.abi, signer);
      
      const tx = await tokenSaleContract.buyTokens({ value });
      await tx.wait();
      setMessage('Compra exitosa');
    } catch (err) {
      console.error(err);
      setMessage('Error al comprar tokens');
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={handlePurchase}>
        <Form.Group controlId="purchaseAmount">
          <Form.Label>Cantidad de Ether para comprar tokens</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ej. 1" 
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(e.target.value)}
            step="0.01"
            min="0"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Comprar Tokens
        </Button>
      </Form>
      {message && <Alert variant="secondary" className="mt-2">{message}</Alert>}
    </div>
  );
};

export default PurchaseTokens;
