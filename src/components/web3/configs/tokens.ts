// src/components/web3/configs/tokens.ts
import { Token } from "../types";
import { bscTestnet } from "./chains";

// import { bsc, bscTestnet } from "./chains";

export const testToken: Token = {
  contractAddress: "0x15d2d598385c543842a719c79bb2df9f8360b005",
  symbol: "FTP-T",
  name: "FacialPay-T",
  decimals: 6,
  logoUrl:
    "https://res.cloudinary.com/dtwcswdd8/image/upload/v1729440270/mica-usd.png",
  networkId: bscTestnet.id,
  blockExplorerUrl: "https://testnet.bscscan.com/",
};

/* export const testTokenMainnet: Token = {
  contractAddress: "0x15d2d598385c543842a719c79bb2df9f8360b005",
  symbol: "FTP-T",
  name: "FacialPay-T",
  decimals: 6,
  logoUrl:
    "https://res.cloudinary.com/dtwcswdd8/image/upload/v1729440270/mica-usd.png",
  networkId: bsc.id,
  blockExplorerUrl: "https://bscscan.com/",
}; */
