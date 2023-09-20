const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res) => {
  console.log(req.url)
})

app.get("/", (req, res) => {
  return res.status(200).json([
    {
      method: "GET",
      url: "/api/v1/users",
      description: "get all users"
    },

    {
      method: "GET",
      url: "/api/v1/users/:id",
      description: "get single user by id"
    },

    {
      method: "POST",
      url: "/api/v1/users",
      description: "create new user"
    },
  ])
})

const users = [
  {
    id: 0,
    name: "fede"
  },

  {
    id: 1,
    name: "juan"
  },

  {
    id: 2,
    name: "lucas"
  },
]

app.get("/api/v1/users", (req, res) => {
  return res.status(200).json({
    amount: users.length,
    users
  })
})

app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params

  const user = users[id]

  if(!user) {
    return res.status(404).json({
      message: "User with that id doesn't exist"
    })
  }

  return res.status(200).json(user)
})

app.post("/api/v1/users", (req, res) => {
  const { name } = req.body

  const newUser = {
    id: users.length,
    name
  }

  users.push(newUser)

  return res.status(200).json(newUser)
})

module.exports = app