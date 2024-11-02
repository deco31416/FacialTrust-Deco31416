// src/translations/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translations.json';
import translationES from './es/translations.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', // Configuración del idioma inicial como inglés
    fallbackLng: 'en', // Idioma de respaldo en caso de que falle el cambio de idioma
    interpolation: {
      escapeValue: false, // React ya protege de las inyecciones XSS
    },
  });

export default i18n;
