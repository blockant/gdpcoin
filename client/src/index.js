import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
} from "@thirdweb-dev/react";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <ThirdwebProvider activeChain="avalanche-fuji">
          <App />
        </ThirdwebProvider>
      </BrowserRouter>
      <NotificationContainer/>
    </React.StrictMode>
  );
}
