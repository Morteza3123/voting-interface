import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import { wrapper } from "../state/store";
import { useDispatch } from "react-redux";
import { hooks, metaMask } from "../connectors/metamask";
import { walletConnect } from '../components/Connectwallet';
import { bscConnector } from '../components/Binance';
import { updateAccount, updateLibrary } from "../state/actions/ConnectActions";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {


  const dispatch = useDispatch(); //* Use "UseDispatch" for save data in redux *//

  const { useAccounts, useProvider } = hooks;
  const accounts = useAccounts();
  const provider = useProvider();


  const checkConnect = async () => {
    const connectedWallet = localStorage.getItem("voting-Wallet");

        if (connectedWallet === "trustWallet") {
          //*  *//
          await walletConnect.activate();
          //*  *//
      } else if (connectedWallet === "metaMask") {
          //*  *//
          await metaMask.activate();
          //*  *//
      } else if (connectedWallet === "walletConnect") {
          //*  *//
          await walletConnect.activate();
          //*  *//
      } else if (connectedWallet === "binanceWallet") {
          //*  *//
          await bscConnector.activate();
          //*  *//
      }
          if (accounts) {
            //*  *//
            dispatch(updateAccount(accounts[0]));
            dispatch(updateLibrary(provider));
            // const nft = new ethers.Contract(nftAddress, nftAbi, provider);
            // const marketplace = new ethers.Contract(marketplaceAddress, marketplaceAbi, provider);
            // dispatch(updateNFT(nft));
            // dispatch(updateMarketPlace(marketplace));
            //*  *//
        }
  }

  //* UseEffect *//
  useEffect(() => {
    checkConnect();
  });

  return(
    <>
        {/* <Provider store={Store}> */}
          <Navbar/>
          <Component {...pageProps} />
        {/* </Provider> */}
    </>
    ) 
}

export default wrapper.withRedux(MyApp);
