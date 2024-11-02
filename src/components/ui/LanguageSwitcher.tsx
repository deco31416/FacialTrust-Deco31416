// src/components/ui/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-md font-medium text-white bg-[#007acc] dark:bg-gray-700 px-3 py-1 rounded-2xl hover:bg-[#005f99] dark:hover:bg-gray-600"
      style={{ height: '40px' }}
    >
      {i18n.language === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
