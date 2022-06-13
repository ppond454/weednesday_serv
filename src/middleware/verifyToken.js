const verifyToken = async (req, res, next) => {
  try {
    const bearer = await req.headers["authorization"]
    const bearerToken = await bearer.split(" ")
    if (bearerToken[0] !== "Bearer")
      return res.status(401).json({ message: "Unauthorized", status: "error" })
    const token = await bearerToken[1]
    req.token = await token
    return await next()
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", status: "error" })
  }
}

module.exports = { verifyToken }
