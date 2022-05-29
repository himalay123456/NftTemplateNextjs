/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

const useContract = (address = undefined, ABI, withSignerIfPossible = true) => {
  const { library } = useWeb3React();

  // Client side web3 instance 
  if ( typeof window !== "undefined") {
    console.log("Inside client side");
    const { ethereum } = window;
    window.web3 = new Web3(ethereum);
    return useMemo(() => {
      if (!address || !ABI || !library) return null;
      try {
        const contractInstance = new window.web3.eth.Contract(ABI, address);
        return contractInstance;
      } catch (error) {
        console.error('Failed to get contract', error);
        return null;
      }
    }, [library]);
 }

 // server side web3 instance
 else{
    console.log("Inside server side");
    const provider = new Web3.providers.HttpProvider(
     process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL,
    )
    const Web3Instance = new Web3(provider);
    const contractInstance = new Web3Instance.eth.Contract(ABI, address)
    return contractInstance;
 }
};

export default useContract;