const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quant: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  status: { type: String, required: true },
  userId: { type: String, required: true },
  address: { type: String, required: true },
})

module.exports = mongoose.model("Product", productSchema, "products")
