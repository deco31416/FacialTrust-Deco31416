// src/components/TokenStats/BalanceCard.tsx
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import Card from '../ui/Card';
import { ethers } from 'ethers';
import { testToken } from '../web3/configs/tokens';
import { TokenbscAbi } from '../web3/abis/token-bsc.abi';

const BalanceCard: React.FC = () => {
  // Obtener la cuenta conectada
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string>('0');

  useEffect(() => {
    const fetchBalance = async () => {
      if (isConnected && address) {
        // Configura el proveedor para la red BSC Testnet
        const provider = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
        
        // Instancia el contrato del token
        const contract = new ethers.Contract(testToken.contractAddress, TokenbscAbi, provider);
        
        // Obtiene el balance
        const balance = await contract.balanceOf(address);
        setBalance(ethers.formatUnits(balance, testToken.decimals)); // Formatea el balance
      }
    };
    fetchBalance();
  }, [isConnected, address]);

  return (
    <Card title="Your Balance">
      {isConnected ? <p>{balance} {testToken.symbol}</p> : <p>Please connect your wallet.</p>}
    </Card>
  );
};

export default BalanceCard;
