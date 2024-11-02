import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider as Provider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { bscTestnet } from "../configs/chains";
// import { bsc, bscTestnet } from "../configs/chains";
import { ReactNode } from "react";
import "@rainbow-me/rainbowkit/styles.css";

function WagmiProvider({ children }: { children: ReactNode }) {
  const config = getDefaultConfig({
    appName: "Dapp Test",
    projectId: "a6d480bf4c3466c053ef6cba8f4d4925",
    chains: [bscTestnet],
    // chains: [bsc, bscTestnet],
  });

  const theme = darkTheme();
  
  theme.colors.accentColor = "rgba(255, 168, 15, 0.98)";

  const queryClient = new QueryClient();

  return (
    <Provider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default WagmiProvider;
