const app = require("express")()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000

const Server = async () => {
  try {
    await require("./models/db")()
    app.use(bodyParser.json())
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    )
    app.use(require("./routes/login"))
    app.use(require("./routes/protected"))
    app.use(require("./routes/signup"))
    app.use(require("./routes/signout"))
    app.use(require("./routes/payment"))
    app.use(require("./routes/topup"))


    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT)
    })
  } catch (err) {
    throw err
  }
}

Server()
