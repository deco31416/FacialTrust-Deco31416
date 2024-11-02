// src/pages/index.tsx
import React from 'react';
import Button from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import ConnectionStatusSwitch from '@/components/ui/ConnectionStatusSwitch';
import { useTranslation } from 'react-i18next';
import InitWebCam from '@/components/FacialRecognition/InitWebCam';
import RunHuman from '@/components/FacialRecognition/RunHuman';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const { isConnected } = useAccount();
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-vento-bg dark:bg-gray-900 p-4 md:p-8 lg:p-12">
      {/* Indicador de conexión */}
      <div className="absolute top-2 right-2 flex items-center space-x-3 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-2 pr-6">
        <ConnectionStatusSwitch isConnected={isConnected} />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {isConnected ? t('home.connectedStatus') : t('home.disconnectedStatus')}
        </span>
      </div>

      {/* Contenedor principal con altura mínima */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-4xl min-h-[500px] p-8 md:p-12 lg:p-16 mt-16 md:mt-22 text-center overflow-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          {t('home.welcome')}
        </h1>
        <p className="text-xl mb-8 text-left text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('home.description')}
          <a
            href="https://deco31416.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 hover:underline ml-1"
          >
            deco31416.com
          </a>
        </p>

        {/* Componente de video y salida de reconocimiento facial */}
        <div className="centered-container">
          <canvas id="canvas" className="video-canvas" />
          <video id="video" className="video-canvas mt-4" autoPlay muted />
        </div>
        <div id="status" className="text-sm mt-2 text-gray-500"></div>
        <div id="log" className="hidden-info text-sm mt-2 text-gray-500"></div>
        <div id="performance" className="hidden-info text-sm mt-2 text-gray-500"></div>

        {/* Inicializar componentes */}
        <InitWebCam elementId="video" />
        <RunHuman inputId="video" outputId="canvas" />

        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mt-8">
          {/* Botón para Medium con enlace en una nueva pestaña */}
          <Button
            className="px-6 py-3 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700"
            onClick={() =>
              window.open("https://medium.com/@deco31416", "_blank", "noopener,noreferrer")
            }
          >
            {t('home.learnMoreButton')}
          </Button>
          <ConnectButton.Custom>
            {({ openConnectModal }) => (
              <Button
                variant="outline"
                onClick={openConnectModal}
                className="px-6 py-3 text-lg rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-100"
              >
                {t('home.connectWalletButton')}
              </Button>
            )}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
