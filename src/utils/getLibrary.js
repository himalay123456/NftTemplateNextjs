import Web3 from 'web3';

const getLibrary = (provider) => {
  const library = new Web3(provider);
  library.pollingInterval = 15000;
  return library;
};

export default getLibrary;