const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  role: { type: [String], required: true },
  createdAt: { type: Date, required: true },
  balance: { type: Number, required: true },
  infomation: {
    photoURL: { type: String, required: false },
    name: { type: String, trim: true, required: false },
    address: { type: String, required: false },
    phone: { type: String, required: false },
  },
  tokens: [{ type: String, required: false }],
})

module.exports = mongoose.model("User", userSchema, "users")
