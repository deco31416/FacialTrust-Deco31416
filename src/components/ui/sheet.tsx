// src/components/ui/sheet.tsx
import React, { ReactNode } from 'react';

type SheetProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

type SheetTriggerProps = {
  children: ReactNode;
  asChild?: boolean;
};

type SheetContentProps = {
  children: ReactNode;
  className?: string;
};

export const Sheet: React.FC<SheetProps> = ({ children, open, onOpenChange }) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => onOpenChange(false)}
        />
      )}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-sm bg-gray-900 text-white z-50 transition-transform transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ children }) => {
  return <>{children}</>;
};

export const SheetContent: React.FC<SheetContentProps> = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
