import { Chain } from "@rainbow-me/rainbowkit";

/* const bsc = {
  id: 56,
  name: "Binance Smart Chain",
  iconUrl: "https://bscscan.com/images/logo-bscscan.svg",
  testnet: false,
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB",
  },
  rpcUrls: {
    default: { http: ["https://bsc-dataseed.binance.org/"] },
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://bscscan.com",
      apiUrl: "https://api.bscscan.com/api",
    },
  },
} as const satisfies Chain; */

const bscTestnet = {
  id: 97,
  name: "Binance Smart Chain Testnet",
  iconUrl: "https://bscscan.com/images/logo-bscscan.svg",
  testnet: true,
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.binance.org:8545/"] },
  },
  blockExplorers: {
    default: {
      name: "BscScan Testnet",
      url: "https://testnet.bscscan.com",
      apiUrl: "https://api-testnet.bscscan.com/api",
    },
  },
} as const satisfies Chain;

// export { bsc, bscTestnet }; 

export { bscTestnet }; 
