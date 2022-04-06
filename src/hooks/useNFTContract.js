import NFT from 'src/contracts/NFT.json';
import useContract from './useContract';

console.log("NFT_CONTRACT_ADDRESS", process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS);

const useNFTContract = () => (
  useContract(process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS, NFT, true));

export default useNFTContract;