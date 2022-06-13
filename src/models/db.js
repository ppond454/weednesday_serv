const mongoose = require("mongoose")
const { URI } = require("../configs/index")

const connect = async () =>
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

module.exports = connect
