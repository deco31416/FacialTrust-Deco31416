// src/components/PaymentDemo.tsx
import React from 'react';

const PaymentDemo: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pago Demo</h2>
      <p className="text-lg text-gray-600">Este es un ejemplo de cómo se realizaría un pago automático con validación de hash facial.</p>
      {/* Agrega la lógica para la validación facial y la llamada a la billetera aquí */}
    </div>
  );
};

export default PaymentDemo;
