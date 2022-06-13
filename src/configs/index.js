require("dotenv").config()
const URI = `mongodb+srv://pp:${process.env.DB_PWD}@cluster0.ot5qh.mongodb.net/weednesdayDb?retryWrites=true&w=majority`

module.exports = { URI }
