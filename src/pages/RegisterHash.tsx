// src/components/RegisterHash.tsx
import React from 'react';
import Button from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTranslation } from 'react-i18next';

const RegisterHash: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center dark:bg-gray-900  ">
      {/* Contenedor principal con altura mínima */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-4xl min-h-[500px] p-8 md:p-12 lg:p-16  md:mt-22 text-center overflow-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Facial Hash Registration
        </h1>
        <p className="text-xl mb-8 text-left text-gray-700 dark:text-gray-300 leading-relaxed">
          Here you can register your face hash for future identity validation.
          <a
            href="https://deco31416.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 hover:underline ml-1"
          >
            deco31416.com
          </a>
        </p>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mt-8">
          {/* Botón para Medium con enlace en una nueva pestaña */}
          <Button
            className="px-6 py-3 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700"
            onClick={() =>
              window.open(
                'https://medium.com/@deco31416',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            Hello world
          </Button>
          <ConnectButton.Custom>
            {({ openConnectModal }) => (
              <Button
                variant="outline"
                onClick={openConnectModal}
                className="px-6 py-3 text-lg rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-100"
              >
                Connect
              </Button>
            )}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  );
};

export default RegisterHash;
