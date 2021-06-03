const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const db = require('./app/models')

db.sequelize.sync({ force: true })

var corsOptions = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

app.use()
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to meeki test project!' })
})
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
