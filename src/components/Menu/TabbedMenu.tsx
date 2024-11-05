// src/components/Menu/TabbedMenu.tsx
import React, { useState } from 'react';
import HomePage from '../../pages/Welcome'; 
import TokenStats from '../../pages/TokenStats'; 
import RegisterHash from '../../pages/RegisterHash'; 
import PaymentDemo from '../../pages/PaymentDemo'; 
import { useTranslation } from 'react-i18next'; 
import { ThemeProvider } from 'next-themes';

type Tab = {
  id: string; 
  label: string;
  content: React.ReactNode;
};

const TabbedMenu: React.FC = () => {
  const { t } = useTranslation(); 

  const [activeTab, setActiveTab] = useState<string>('inicio');

  const tabs: Tab[] = [
    {
      id: 'inicio',
      label: t('menu.home'),
      content: <HomePage isActive={activeTab === 'inicio'} />, 
    },
    {
      id: 'token',
      label: t('menu.token'),
      content: <TokenStats />,
    },
    {
      id: 'registrar-hash',
      label: t('menu.registerHash'), 
      content: <RegisterHash />,
    },
    {
      id: 'pago-demo',
      label: t('menu.paymentDemo'),
      content: <PaymentDemo />,
    },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="relative max-w-4xl w-full mx-auto mt-14 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
        {/* Pestañas de navegación */}
        <div className="flex overflow-x-auto space-x-4 border-b border-gray-300 dark:border-gray-700 mb-4 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 py-2 md:px-4 text-sm md:text-base font-medium transition-all duration-300 ease-in-out rounded-md ${
                activeTab === tab.id
                  ? 'bg-[#f6851b] text-white shadow-md mb-1'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#f6851b] hover:bg-gray-100 dark:hover:bg-gray-700 mb-1'
              }`}
              aria-selected={activeTab === tab.id}
              aria-controls={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido de la pestaña seleccionada */}
        <div
          className="flex-grow mt-4 transition-opacity duration-300 ease-in-out"
          id={`tab-${activeTab}`}
          role="tabpanel"
        >
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className=" bg-gray-50 dark:bg-gray-900 rounded-md shadow-inner">
                  {tab.content}
                </div>
              )
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TabbedMenu;
