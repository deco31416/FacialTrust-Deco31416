// src/pages/index.tsx
import React from 'react';
import Button from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import ConnectionStatusSwitch from '@/components/ui/ConnectionStatusSwitch';
import { useTranslation } from 'react-i18next';
import InitWebCam from '@/components/FacialRecognition/InitWebCam';
import RunHuman from '@/components/FacialRecognition/RunHuman';
import TabbedMenu from '@/components/Menu/TabbedMenu';


const HomePage: React.FC = () => {
  const { isConnected } = useAccount();
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center bg-vento-bg dark:bg-gray-900 p-4 md:p-8 lg:p-12">
      {/* Indicador de conexión */}
      <div className="absolute top-2 right-2 flex items-center space-x-3 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-2 pr-6">
        <ConnectionStatusSwitch isConnected={isConnected} />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {isConnected ? t('home.connectedStatus') : t('home.disconnectedStatus')}
        </span>
      </div>

      {/* Contenedor principal con altura mínima */}
      
      <TabbedMenu />
      </div>
  );
};

export default HomePage;
