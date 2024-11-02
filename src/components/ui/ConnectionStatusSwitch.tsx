// src/components/ui/ConnectionStatusSwitch.tsx
import React from 'react';
import { Switch } from '@headlessui/react';

type ConnectionStatusSwitchProps = {
  isConnected: boolean;
};

const ConnectionStatusSwitch: React.FC<ConnectionStatusSwitchProps> = ({ isConnected }) => {
  return (
    <Switch
      checked={isConnected}
      onChange={() => {}}
      className={`group relative flex h-7 w-14 cursor-default rounded-full p-1 transition-colors duration-200 ease-in-out ${
        isConnected ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
          isConnected ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </Switch>
  );
};

export default ConnectionStatusSwitch;
 