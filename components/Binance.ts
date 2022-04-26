import { BscConnector } from "@binance-chain/bsc-connector";

export const bscConnector = new BscConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});