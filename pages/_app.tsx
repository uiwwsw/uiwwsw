import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/services/store";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
