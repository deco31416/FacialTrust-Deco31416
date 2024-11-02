// src/components/ui/MobileConnectButton.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';

const MobileConnectButton: React.FC = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;
        return (
          <div
            aria-hidden={!mounted}
            style={{
              display: mounted ? 'flex' : 'none',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            {connected ? (
              <>
                <button
                  onClick={openChainModal}
                  type="button"
                  className="flex items-center bg-[#007acc] dark:bg-gray-700 text-white p-2 rounded-2xl shadow-md"
                >
                  <img
                    src={chain.iconUrl}
                    alt={chain.name ?? 'Chain icon'}
                    className="w-4 h-4 mr-2"
                  />
                  {chain.name}
                </button>

                <button
                  onClick={openAccountModal}
                  type="button"
                  className="flex items-center bg-[#007acc] dark:bg-gray-700 text-white dark:text-gray-100 p-2 rounded-2xl shadow-md"
                >
                  <img
                    src={account.ensAvatar || '/img/metamask.png'}
                    alt="Account avatar"
                    className="w-4 h-4 mr-2"
                  />
                  <span>{account.displayName}</span>
                </button>
              </>
            ) : (
              <button
                onClick={openConnectModal}
                type="button"
                className="bg-[#007acc] dark:bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-[#005f99] dark:hover:bg-gray-600"
              >
                Connect Wallet
              </button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default MobileConnectButton;
