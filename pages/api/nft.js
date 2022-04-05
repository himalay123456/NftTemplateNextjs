import { dbConnect } from 'src/utils/index';
import Nft from 'src/models/nft';
import logger from 'src/utils/logger';

dbConnect();

export default async function handler(req, res) {
  logger.info('Inside show all nfts route')
  const data = await Nft.find({});
  res.status(200).json(data)
}
