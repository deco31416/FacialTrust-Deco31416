// src/components/TokenStats/FaucetCard.tsx

import React from 'react';
import Card from '../ui/Card';

const FaucetCard: React.FC = () => {
  return (
    <Card title="Solicita Gas en Testnet">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        Obtén tBNB en la testnet de Binance para realiza transacciones.
      </p>
      <a
        href="https://testnet.bnbchain.org/faucet-smart"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-colors"
      >
        Ir al Faucet
      </a>
    </Card>
  );
};

export default FaucetCard;
