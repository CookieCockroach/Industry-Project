const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())
app.use(express.json())



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})