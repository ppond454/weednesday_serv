const {decodeToken} = require("../utils/manageToken")
const User = require("../models/model.user")

const authToken = async (req, res, next) => {
  try {
    const token = await req.token
    const data = await decodeToken(token)
    const user = await User.findById(data.id)
    if (!user.tokens.includes(req.token))
      return res.status(401).json({ message: "Unauthorized", status: "error" })
    req.user = await user
    return await next()
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", status: "error" })
  }
}

module.exports = { authToken }
