const NFT_CONTRACT_ABI = require("./src/contracts/NFT.json");
const web3socket = require("web3-providers-ws");
const web3 = require("web3");
require("dotenv").config();

const options = {
  timeout: 30000, // ms
  // clientConfig: {
  //   // Useful to keep a connection alive
  //   keepalive: true,
  //   keepaliveInterval: 60000 // ms
  // },
  // Enable auto reconnection
  reconnect: {
    auto: true,
    delay: 5000, // ms
    maxAttempts: 5,
    onTimeout: false,
  },
};

// Connection url
const web3Instance = new web3(
  new web3socket(process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL, options)
);


// console.log(web3Instance)
console.log("Server Started", process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL);

const AlvancheInstance = new web3Instance.eth.Contract(
  NFT_CONTRACT_ABI,
  process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
);

AlvancheInstance.events.Transfer(
  {
    fromBlock: "latest",
  },
  async (error, event) => {
    try {
      console.log("Events Catched");
      console.log(event.returnValues);
    } catch (err) {
      console.log("Error in catching events", err);
    }
  }
);
