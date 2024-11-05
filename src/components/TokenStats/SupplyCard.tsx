// src/components/TokenStats/SupplyCard.tsx

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { formatUnits } from 'ethers';
import Card from '../ui/Card';
import { testToken } from '../web3/configs/tokens';
import { TokenbscAbi } from '../web3/abis/token-bsc.abi';
import { bscTestnet } from '../web3/configs/chains';

// Función para formatear números grandes con notación "K", "M", "B" y solo dos decimales
const formatNumber = (num: number): string => {
  let formattedNum: string;

  if (num >= 1_000_000_000) {
    formattedNum = (num / 1_000_000_000).toFixed(2) + 'B';
  } else if (num >= 1_000_000) {
    formattedNum = (num / 1_000_000).toFixed(2) + 'M';
  } else if (num >= 1_000) {
    formattedNum = (num / 1_000).toFixed(2) + 'K';
  } else {
    formattedNum = num.toFixed(2);
  }

  // Toma los tres primeros dígitos antes del punto decimal
  const [integerPart] = formattedNum.split('.');
  return integerPart.length >= 3 ? integerPart.slice(0, 3) + formattedNum.slice(formattedNum.length - 1) : formattedNum;
};




const SupplyCard: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<string>('0');

  useEffect(() => {
    const fetchTotalSupply = async () => {
      // Configura el proveedor para la red BSC Testnet desde chains.ts
      const provider = new ethers.JsonRpcProvider(bscTestnet.rpcUrls.default.http[0]);

      // Instancia el contrato del token
      const contract = new ethers.Contract(testToken.contractAddress, TokenbscAbi, provider);

      // Obtiene el suministro total y convierte a un número decimal para el formateo
      const supply = await contract.totalSupply();
      const supplyFormatted = parseFloat(formatUnits(supply, testToken.decimals));

      // Formatea el suministro total usando la función de formateo personalizada
      setTotalSupply(formatNumber(supplyFormatted));
    };
    fetchTotalSupply();
  }, []);

  return (
    <Card title="Total Supply">
      <p>{totalSupply} {testToken.symbol}</p>
    </Card>
  );
};

export default SupplyCard;
