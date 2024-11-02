// src/components/ui/button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'icon' | 'default';
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', size = 'default', className, onClick }) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded transition-colors';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:bg-gray-200',
  };
  const sizeStyles = {
    default: 'text-base',
    icon: 'p-2 text-xl',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
