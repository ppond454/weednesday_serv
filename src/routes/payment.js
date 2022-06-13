const express = require("express")
const { verifyToken } = require("../middleware/verifyToken")
const { authToken } = require("../middleware/authToken")
const router = express.Router()

router.post("/payment", verifyToken, authToken, async (req, res) => {
  try {
    const { cart } = req.body
    const { user } = req
    if (!cart || cart.length === 0) throw "Cart is empty"
    const total = cart.reduce((acc, cur) => acc + cur.price * cur.quant, 0)
    if (user.balance < total) throw "Not enough balance"
    user.balance -= total
    await user.save()
    res.status(200).json({ message: "Payment success", status: "success" ,balance: user.balance})
  } catch (error) {
    res.status(500).json({ message: error, status: "error" })
  }
})

module.exports = router
