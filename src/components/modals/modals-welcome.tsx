// src/components/modals/modals-welcome.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/button";

const logoLight = "/img/logo-487x487.png";

export default function ModalWelcome() {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative bg-gray-900 rounded-3xl shadow-xl p-8 w-full max-w-sm text-center border border-gray-400">
                
                {/* Botón de cierre */}
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                    <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                </button>
                
                {/* Logo */}
                <div className="mb-6">
                    <Image src={logoLight} alt="Logo" width={100} height={100} className="mx-auto" />
                </div>
                
                {/* Título */}
                <h2 className="text-2xl font-bold text-gray-100 mb-2">
                    Welcome
                </h2>
                
                {/* Descripción */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    Explore all the features and learn more about my developments.
                </p>
                
                {/* Botón de acción */}
                <Button
                    variant="default"
                    className="px-6 py-3 w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                    onClick={closeModal}
                >
                    Learn more
                </Button>
            </div>
        </div>
    );
}
