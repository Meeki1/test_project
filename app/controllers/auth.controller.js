const db = require('../models')
const config = require('../config/auth.config')
const User = db.user

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const { user } = require('../models')

// signin
exports.signin = (req, res) => {
  User.create({
    nickname: req.body.nickname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then(user => {
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 1800, // 30 minute
      })
      res.send({
        token,
        expire: 1800,
      })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

// login
exports.login = (req, res) => {
  User.findOne({
    where: {
      nickname: req.body.nickname,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' })
      }

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        })
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 1800, // 30 minute
      })
      res.status(200).send({
        token,
        expire: 1800,
      })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}
