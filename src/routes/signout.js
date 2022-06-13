const express = require("express")
const { verifyToken } = require("../middleware/verifyToken")
const { authToken } = require("../middleware/authToken")
const User = require("../models/model.user")

const router = express.Router()

router.delete("/signout", verifyToken, authToken, async (req, res) => {
  const { token, user } = req
  try {
    user.tokens = await user.tokens.filter((t) => t !== token)
    await user.save()
    res.status(200).json({ message: "Signout success", status: "success" })
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized", status: "error" })
  }
})

module.exports = router
