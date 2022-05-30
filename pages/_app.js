import React from "react";
import Script from "next/script";
import { Web3ReactProvider } from "@web3-react/core";

import getLibrary from "src/utils/getLibrary";
import "../styles/globals.css"
import "public/assets/css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
        <Script
          async
          src="/assets/js/vendor/core.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/vendor/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/vendor/bootstrap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/vendor/all.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/vendor/slider.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/vendor/countdown.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="/assets/js/vendor/shuffle.min.js"
          strategy="beforeInteractive"
        />
        <Script async src="/assets/js/main.js" strategy="beforeInteractive" />
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
