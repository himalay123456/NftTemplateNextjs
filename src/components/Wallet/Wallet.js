import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import MetaMaskOnboarding from "@metamask/onboarding";

import Web3 from 'src/utils/web3';
import { injected } from "src/utils/connectors";
import { useEagerConnect, useInactiveListener } from "src/hooks";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json-1/wallet";

const Activity = () => {
  const [state, setState] = useState({
    data: {},
    walletData: [],
  });
  const web3 = Web3();
  const { active, account, activate, deactivate, connector } = useWeb3React();
  const onboarding = useRef();
  const [activatingConnector, setActivatingConnector] = useState();

  //   //Persist Connection
  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      } else {
        // setMetamaskButtonText(CONNECT_TEXT);
      }
    }
  }, [account]);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setState({
          data: res.data,
          walletData: res.data.walletData,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Wallet connect function handler
  const connectWallet = async (title) => {
    let chainId = await web3.eth.getChainId();
    console.log(chainId);
    // Metamask
    if (title === "MetaMask") {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        setActivatingConnector(injected);
        await activate(injected);
      } else {
        await onboarding.current.startOnboarding();
      }
    }
  };

  // Disconnect wallet function handler
  const disconnectWallet = (title) => {
    if (title === "MetaMask" && active) {
      localStorage.setItem("shouldEagerConnect", false);
      deactivate();
    }
  };

  return (
    <section className="wallet-connect-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <span>{state.data.preHeading}</span>
              <h3 className="mt-3 mb-0">{state.data.heading}</h3>
              <p>{state.data.content}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center items">
          {state.walletData.map((item, idx) => {
            return (
              <div key={`wd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a
                    className="d-block text-center"
                    onClick={() => connectWallet(item.title)}
                  >
                    <img className="avatar-lg" src={item.img} alt="" />
                    <h4 className="mb-0">{item.title}</h4>
                    <p
                      onClick={() => disconnectWallet(item.title)}
                      className="wallet-connected"
                    >
                      {item.title === "MetaMask" && active && "Connected"}
                    </p>
                    <p>{item.content}</p>
                    <div className="col-12">
                      <button
                        onClick={() => disconnectWallet(item.title)}
                        className="btn w-100 mt-3 mt-sm-4"
                      >
                        {active ? "Disconnect" : "Connect"}
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activity;
