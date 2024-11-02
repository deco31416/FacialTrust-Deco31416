import { Switch } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      setEnabled(true);
    } else if (theme === 'light') {
      setEnabled(false);
    }
  }, [theme]);

  const handleToggle = () => {
    setEnabled(!enabled);
    setTheme(enabled ? 'light' : 'dark');
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={`relative inline-flex items-center h-10 w-20 rounded-2xl transition-colors duration-300 ease-in-out ${
        enabled ? 'bg-gray-700' : 'bg-[#f6851b]'
      } shadow-lg`}
    >
      {/* Icono de Sol, visible en tema claro */}
      <span
        className={`absolute inset-y-0 left-2 flex items-center text-yellow-300 transition-opacity duration-300 ease-in-out ${
          enabled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
      </span>
      
      {/* Icono de Luna, visible en tema oscuro */}
      <span
        className={`absolute inset-y-0 right-2 flex items-center text-gray-700 transition-opacity duration-300 ease-in-out ${
          enabled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
      </span>
      
      {/* Botón deslizante */}
      <span
        className={`transform transition-transform bg-white rounded-2xl w-8 h-8 ${
          enabled ? 'translate-x-10' : 'translate-x-1'
        } shadow-md`}
      />
    </Switch>
  );
};

export default ThemeToggle;
