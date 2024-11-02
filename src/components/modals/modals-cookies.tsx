// src/components/modals/CookiePolicyModal.tsx
"use client"; // Esto indica que es un Client Component

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

type CookieName = "google" | "facebook" | "twitter";

export default function CookiePolicyModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const { t } = useTranslation();

    const [cookies, setCookies] = useState({
        google: false,
        facebook: false,
        twitter: false,
    });

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        const savedPreferences = localStorage.getItem("cookiePreferences");

        if (cookiesAccepted && savedPreferences) {
            setIsOpen(false);
            setCookies(JSON.parse(savedPreferences));
        } else {
            setIsOpen(true);
        }
    }, []);

    const closeModal = () => setIsOpen(false);
    const openCustomizeModal = () => setIsCustomizeOpen(true);
    const closeCustomizeModal = () => setIsCustomizeOpen(false);

    const toggleAccordion = (section: string) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    const handleCookieChange = (cookieName: CookieName) => {
        setCookies(prev => ({
            ...prev,
            [cookieName]: !prev[cookieName],
        }));
    };

    const savePreferences = () => {
        localStorage.setItem("cookiesAccepted", "true");
        localStorage.setItem("cookiePreferences", JSON.stringify(cookies));
        setIsCustomizeOpen(false);
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Primer modal - Políticas de Cookies */}
            <div className="fixed bottom-0 left-0 z-50 w-full max-w-lg p-4 bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg">
                <div className="relative text-gray-800 dark:text-white p-6">
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="absolute top-3 right-3 text-2xl cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        onClick={closeModal}
                    />
                    <h2 className="text-xl font-semibold mb-2">{t('cookiePolicy.title')}</h2>
                    <hr className="mb-4 border-gray-300 dark:border-gray-600" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {t('cookiePolicy.description')}
                    </p>
                    <div className="flex justify-between space-x-4">
                        <button
                            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                            onClick={openCustomizeModal}
                        >
                            {t('cookiePolicy.customize')}
                        </button>
                        <button
                            className="flex-1 border border-gray-400 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                            onClick={savePreferences}
                        >
                            {t('cookiePolicy.acceptAll')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Segundo modal - Personalización de cookies */}
            {isCustomizeOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-300"
                            onClick={closeCustomizeModal}
                        />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            {t('cookiePolicy.customizeTitle')}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                            {t('cookiePolicy.customizeDescription')}
                        </p>
                        <div className="text-left space-y-4">
                            {Object.keys(cookies).map((key) => (
                                <div key={key}>
                                    <div
                                        className="flex justify-between items-center cursor-pointer py-2"
                                        onClick={() => toggleAccordion(key)}
                                    >
                                        <span className="font-semibold">{t(`cookiePolicy.${key}Cookies`)}</span>
                                        <FontAwesomeIcon icon={openAccordion === key ? faChevronUp : faChevronDown} />
                                    </div>
                                    {openAccordion === key && (
                                        <div className="pl-4 pb-2 text-sm text-gray-600 dark:text-gray-400">
                                            <p>{t(`cookiePolicy.${key}Description`)}</p>
                                            <label className="flex items-center space-x-2 mt-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox rounded-full"
                                                    checked={cookies[key as CookieName]}
                                                    onChange={() => handleCookieChange(key as CookieName)}
                                                />
                                                <span>{t(`cookiePolicy.accept${key.charAt(0).toUpperCase() + key.slice(1)}`)}</span>
                                            </label>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                            onClick={savePreferences}
                        >
                            {t('cookiePolicy.savePreferences')}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
