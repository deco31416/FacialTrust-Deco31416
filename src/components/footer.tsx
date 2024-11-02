// src/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <footer className="bg-[#e9ebee] dark:bg-gray-800 text-vento-text dark:text-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left">
        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4 lg:mb-0">
          <Image
            src={
              theme === 'dark'
                ? '/img/logo-40x40.png'
                : '/img/logo-500x500-Dark.png'
            }
            alt="Logo"
            width={40}
            height={40}
          />
          <div>
            <p className="text-black dark:text-gray-300 font-medium hover:text-[#f6851b] dark:hover:text-[#f6851b]">
              <a
                href="https://www.deco31416.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f6851b] dark:text-[#f6851b] font-semibold text-lg hover:text-gray-700  dark:hover:text-gray-300"
              >
                {t('footer.by')}
              </a>
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300 font-medium">
              {t('footer.demoText', { year: currentYear })}
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-auto flex justify-center lg:justify-end space-x-6 mt-4 lg:mt-0">
          <a
            href="https://www.deco31416.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-[#f6851b] dark:hover:text-[#f6851b] flex items-center"
          >
            <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 mr-2 lg:mr-1" /> {t('footer.website')}
          </a>
          <a
            href="https://github.com/deco31416"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-[#f6851b] dark:hover:text-[#f6851b] flex items-center"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2 lg:mr-1" /> {t('footer.github')}
          </a>
          <a
            href="https://x.com/deco31416"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-[#f6851b] dark:hover:text-[#f6851b] flex items-center"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 mr-2 lg:mr-1" /> {t('footer.twitter')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
