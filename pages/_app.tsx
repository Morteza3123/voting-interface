import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import { wrapper } from "../state/store";

function MyApp({ Component, pageProps }: AppProps) {



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
