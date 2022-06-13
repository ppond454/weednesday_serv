const express = require("express")
const router = express.Router()
const User = require("../models/model.user")
const { createToken } = require("../utils/manageToken")

router.get("/login", async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).json({ message: "Invalid request", status: "error" })
  try {
    const user = await User.findOne({ username, password })
    if (!user)
      return res
        .status(404)
        .json({ message: "password or username is incorrect", status: "error" })

    const token = await createToken(user._id)
    user.tokens.push(token)
    user.save()
    return res.status(200).json({
      message: "Login success",
      status: "success",
      token,
    })
  } catch (error) {
    res.status(500).json({ message: error, status: "error" })
  }
})

module.exports = router
