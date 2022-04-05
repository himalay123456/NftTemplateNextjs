import mongoose from 'mongoose'

const NftSchema = new mongoose.Schema({
  name: String,
  email: String
})

module.exports = mongoose.models.Nft || mongoose.model('Nft', NftSchema)