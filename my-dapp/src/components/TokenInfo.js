// src/components/TokenInfo.js
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import MyTokenABI from '../abi/MyToken.json';

const TokenInfo = ({ walletAddress, myTokenAddress, provider }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (provider && walletAddress && myTokenAddress) {
        try {
          const contract = new ethers.Contract(myTokenAddress, MyTokenABI.abi, provider);
          const rawBalance = await contract.balanceOf(walletAddress);
          // Se asume que el token tiene 18 decimales
          const formattedBalance = ethers.formatUnits(rawBalance, 18);
          setBalance(formattedBalance);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchBalance();
  }, [provider, walletAddress, myTokenAddress]);

  if (balance === null) return null;

  return (
    <Alert variant="info">
      Balance de tokens: {balance}
    </Alert>
  );
};

export default TokenInfo;
