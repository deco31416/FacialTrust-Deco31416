import { Token } from "../types";
import { bscTestnet } from "./chains";

// import { bsc, bscTestnet } from "./chains";

export const testToken: Token = {
  contractAddress: "0x04C385F999dDDc8be75A4384C26864abE496139A",
  symbol: "MicaT",
  name: "MicaUSD-T",
  decimals: 6,
  logoUrl:
    "https://res.cloudinary.com/dtwcswdd8/image/upload/v1729440270/mica-usd.png",
  networkId: bscTestnet.id,
  blockExplorerUrl: "https://testnet.bscscan.com/",
};

/* export const testTokenMainnet: Token = {
  contractAddress: "0x04C385F999dDDc8be75A4384C26864abE496139A",
  symbol: "MicaT",
  name: "MicaUSD-T",
  decimals: 6,
  logoUrl:
    "https://res.cloudinary.com/dtwcswdd8/image/upload/v1729440270/mica-usd.png",
  networkId: bsc.id,
  blockExplorerUrl: "https://bscscan.com/",
}; */
