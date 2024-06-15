import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { PetraWallet } from "petra-plugin-wallet-adapter";
import {
  AptosWalletAdapterProvider
} from '@aptos-labs/wallet-adapter-react';

function MyApp({ Component, pageProps }) {
  const wallets = [new PetraWallet()];
//  const wallets = [new PetraWallet()];


  return <AptosWalletAdapterProvider
  plugins={wallets}
      autoConnect={false} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log('AptosWalletAdapterProvider Error :: ', error);
      }}>
        <Component {...pageProps} />
    </AptosWalletAdapterProvider>
}

export default MyApp
