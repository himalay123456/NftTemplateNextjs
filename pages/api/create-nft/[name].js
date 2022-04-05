import { dbConnect } from 'src/utils/index';
import Nft from 'src/models/nft';

dbConnect();

export default async function handler(req, res) {
  const name = req.query.name;
  const data = await Nft.create({
      name
  });
  res.status(200).json(data)
}
