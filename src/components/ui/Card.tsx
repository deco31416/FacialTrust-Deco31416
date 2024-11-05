// src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg mb-6 transition-all hover:shadow-xl">
      <div className="mb-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-wide">{title}</h3>
      </div>
      <div className="text-lg font-normal text-gray-800 dark:text-gray-200 leading-tight">
        {children}
      </div>
    </div>
  );
};

export default Card;
