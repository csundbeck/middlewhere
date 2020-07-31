const express = require('express')
const users = require('./routers/users')
const app = express()

const port = process.env.PORT || 4000

app.use(users)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))