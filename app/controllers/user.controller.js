var jwt = require('jsonwebtoken')
exports.ok = (req, res) => {
  res.status(200).send('Public Content.')
}

exports.logout = (req, res) => {
  res.status(200).send('Sign In again')
}

exports.logout = (req, res) => {}

exports.getUser = (req, res) => {
  console.log('ya ymnbii')
}

exports.putUser = (req, res) => {
  console.log('i put User')
}

exports.deleteUser = (req, res) => {
  console.log('i delete User')
}
