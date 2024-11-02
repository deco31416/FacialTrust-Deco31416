// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileMenu from '@/components/ui/MobileMenu';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vento-bg dark:bg-gray-800'
          : 'bg-vento-bg dark:bg-gray-800'
      } text-vento-text dark:text-gray-100 shadow-lg`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={
              theme === 'dark'
                ? '/img/logo-40x40.png'
                : '/img/logo-500x500-Dark.png'
            }
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">Deco 31416</span>
        </div>

        {/* Navegación en versión de escritorio */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <div className="flex items-center space-x-6 bg-[#007acc] dark:bg-gray-700 rounded-2xl px-4 py-2">
            <a
              href="https://www.deco31416.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400 text-lg font-medium"
            >
              {t('navbar.home')}
            </a>
            <a
              href="https://github.com/deco31416?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400 text-lg font-medium"
            >
              {t('navbar.projects')}
            </a>
            <a
              href="https://github.com/deco31416"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-400 text-lg font-medium"
            >
              {t('navbar.about')}
            </a>
          </div>

          <LanguageSwitcher />
          <ThemeToggle />
          <div>
            <ConnectButton />
          </div>
        </nav>

        {/* Versión móvil y tabletas con menú hamburguesa */}
        <button
          className="lg:hidden p-2 rounded text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>

        {/* Modal de menú desplegable en versión móvil y tabletas */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Navbar;
