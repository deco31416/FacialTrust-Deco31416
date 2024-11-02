// src/components/Layout.tsx
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import CookiePolicyModal from './modals/modals-cookies';
import ModalWelcome from './modals/modals-welcome';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-vento-bg dark:bg-gray-900 text-vento-text dark:text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
      <CookiePolicyModal />
      <ModalWelcome />
    </div>
  );
};

export default Layout;
