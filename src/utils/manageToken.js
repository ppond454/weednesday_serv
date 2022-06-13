const jwt = require("jsonwebtoken")
const { SECRET_TOKEN } = require("../configs/secretToken")

const createToken = async (id) => {
  const token = jwt.sign(
    {
      id,
    },
    SECRET_TOKEN,
    { expiresIn: "365d" }
  )
  return token
}

const decodeToken = async (token) => {
  return jwt.verify(token, SECRET_TOKEN)
}

module.exports = { createToken, decodeToken }
