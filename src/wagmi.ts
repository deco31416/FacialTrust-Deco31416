// src/wagmi.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  bsc,
  bscTestnet,
} from 'wagmi/chains';

const enableTestnets = true; // Cambia esto a `false` si no quieres mostrar las testnets

export const config = getDefaultConfig({
  appName: 'Deco31416',
  projectId: '6b0e7594e3cfc2d55e17b6509e809444',
  chains: [
    bsc,
    ...(enableTestnets ? [bscTestnet] : [bsc]),
  ],
  ssr: true,
});