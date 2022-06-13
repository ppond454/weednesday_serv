const express = require("express")
const router = express.Router()
const User = require("../models/model.user")

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password)
    return res.status(400).json({ message: "Invalid request" })
  try {
    const user = await User.create({
      createdAt: Date.now() + 60 * 60 * 1000 * 7,
      username,
      email,
      password,
      balance: 0,
      role: ["user"],
      infomation: { name: "", address: "", phone: "" },
    })
    res.status(201).json({ message: "Signup success", status: "success", user })
  } catch (err) {
    res.status(500).json({ message: err, status: "error" })
  }
})

module.exports = router
