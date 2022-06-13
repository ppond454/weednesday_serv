const express = require("express")
const { verifyToken } = require("../middleware/verifyToken")
const { authToken } = require("../middleware/authToken")

const router = express.Router()

router.get("/protected", verifyToken, authToken, async (req, res) => {
  try {
    const { user } = req
    res.status(200).json({ message: "Protected", status: "success", user })
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", status: "error" })
  }
})

module.exports = router
