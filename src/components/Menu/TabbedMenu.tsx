// src/components/Menu/TabbedMenu.tsx
import React, { useState } from 'react';
import HomePage from '../../pages/Welcome'; // Importa la página de inicio
import TokenStats from '../../pages/TokenStats'; // Componente de ejemplo para Token
import RegisterHash from '../../pages/RegisterHash'; // Componente de ejemplo para Registrar Hash
import PaymentDemo from '../../pages/PaymentDemo'; // Componente de ejemplo para Pago Demo
import { useTranslation } from 'react-i18next'; // Importa useTranslation si usas i18next para las traducciones

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const TabbedMenu: React.FC = () => {
  const { t } = useTranslation(); // Traducción opcional

  const [activeTab, setActiveTab] = useState<string>('inicio');

  const tabs: Tab[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      content: <HomePage isActive={activeTab === 'inicio'} />, // Pasa isActive como prop
    },
    {
      id: 'token',
      label: 'Token',
      content: <TokenStats />,
    },
    {
      id: 'registrar-hash',
      label: 'Registra tu Hash',
      content: <RegisterHash />,
    },
    {
      id: 'pago-demo',
      label: 'Pago Demo',
      content: <PaymentDemo />,
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      {/* Pestañas de navegación */}
      <div className="flex space-x-4 border-b border-gray-300 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 font-medium transition-all duration-300 ease-in-out rounded-md ${
              activeTab === tab.id
                ? 'bg-[#f6851b] text-white shadow-md mb-1'
                : 'text-gray-600 hover:text-[#f6851b] hover:bg-gray-100 mb-1'
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
              <div key={tab.id}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TabbedMenu;
