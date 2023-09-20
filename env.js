require("dotenv").config({
  path: `${__dirname}/.env`
})

const PORT = process.env.PORT || 3001

module.exports = {
  PORT
}