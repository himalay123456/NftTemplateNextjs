import React, { useState, useEffect } from 'react';
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";

import { useEagerConnect, useInactiveListener } from 'src/hooks';
import getLibrary from "src/utils/getLibrary";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
