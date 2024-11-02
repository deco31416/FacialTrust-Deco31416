// src/components/ui/MobileMenu.tsx
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import MobileConnectButton from './MobileConnectButton';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative w-full max-w-xs p-6 bg-vento-bg dark:bg-gray-900 text-vento-text dark:text-gray-100 shadow-xl rounded-2xl">
                <div className="flex items-center justify-between">
                  <LanguageSwitcher />
                  <button
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col items-center space-y-6 mt-8 text-lg">
                  <a
                    href="https://www.deco31416.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[#007acc] dark:text-gray-100 hover:text-[#005f99] dark:hover:text-gray-400"
                  >
                    {t('navbar.home')}
                  </a>
                  <a
                    href="https://github.com/deco31416?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[#007acc] dark:text-gray-100 hover:text-[#005f99] dark:hover:text-gray-400"
                  >
                    {t('navbar.projects')}
                  </a>
                  <a
                    href="https://github.com/deco31416"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[#007acc] dark:text-gray-100 hover:text-[#005f99] dark:hover:text-gray-400"
                  >
                    {t('navbar.about')}
                  </a>

                  <div className="mt-4">
                    <ThemeToggle />
                  </div>
                  <div className="mt-4">
                    <MobileConnectButton />
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
