const Web3 = require("web3");

const ethEnabled = () => {
  if (typeof window !== "undefined") {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      return web3;
    }
  }
  return false;
};

export default ethEnabled;
