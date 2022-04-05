import { dbConnect } from 'src/utils/index';
import Nft from 'src/models/nft';
dbConnect();

export default async function handler(req, res) {
  const data = await Nft.find({});
  res.status(200).json(data)
}
