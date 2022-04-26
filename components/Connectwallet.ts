import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
    (actions : any) =>
        new WalletConnect(actions, {
            rpc: {
                1: "https://mainnet.infura.io/v3/",
            },
        })
);