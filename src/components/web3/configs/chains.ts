// src/components/web3/configs/chains.ts
import { Chain } from "@rainbow-me/rainbowkit";

const bscTestnet = {
  id: 97,
  name: "tBSC",
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
      apiUrl: "https://testnet.bscscan.com/api",
    },
  },
} as const satisfies Chain;

/* const bsc = {
  id: 56,
  name: "Binance Smart Chain",
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

// export { bsc, bscTestnet }; 

export { bscTestnet }; 
