const express = require("express")
const { verifyToken } = require("../middleware/verifyToken")
const { authToken } = require("../middleware/authToken")
const router = express.Router()

router.post("/topup", verifyToken, authToken, async (req, res) => {
  try {
    const { amount } = req.body
    const { user } = req
    let _amount = parseInt(amount)
    if (!amount || _amount === 0) throw "please enter amount"
    user.balance += _amount
    await user.save()
    res.status(200).json({
      message: "Topup success",
      status: "success",
      balance: user.balance,
    })
  } catch (error) {
    res.status(500).json({ message: error, status: "error" })
  }
})

module.exports = router
