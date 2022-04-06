import { dbConnect } from 'src/utils/index';
import Nft from 'src/models/nft';
import logger from 'src/utils/logger';

dbConnect();

export default async function handler(req, res) {
  logger.info('Inside create nft route')
  const name = req.query.name;
  const data = await Nft.create({
      name
  });
  res.status(200).json(data)
}
