// src/pages/Welcome.tsx
import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import InitWebCam from '@/components/FacialRecognition/InitWebCam';
import RunHuman from '@/components/FacialRecognition/RunHuman';

type WelcomeProps = {
  isActive: boolean;
};

const Welcome: React.FC<WelcomeProps> = ({ isActive }) => {
  const { t } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Cuando la pestaña de inicio está activa, cambia la clave para forzar el re-montaje de los componentes
    if (isActive) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [isActive]);

  return (
    <div className="relative flex flex-col items-center justify-center dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 p-8 md:p-12 lg:p-10 dark:text-gray-100">
          {t('home.welcome')}
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
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

        {/* Inicializar componentes de reconocimiento facial */}
        <InitWebCam key={key} elementId="video" />
        <RunHuman key={key} inputId="video" outputId="canvas" />

        <div className="p-8 md:p-12 lg:p-10 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mt-8">
          <Button
            className="px-6 py-3 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700"
            onClick={() =>
              window.open("https://medium.com/@deco31416", "_blank", "noopener,noreferrer")
            }
          >
            {t('home.learnMoreButton')}
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open("https://t.me/deco31416", "_blank", "noopener,noreferrer")}
            className="px-6 py-3 text-lg rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-100"
          >
            {t('home.TelegramButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
