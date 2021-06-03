var jwt = require('jsonwebtoken')
exports.ok = (req, res) => {
  res.status(200).send('Public Content.')
}

exports.getUser = (req, res) => {
  console.log('i get User')
}

exports.putUser = (req, res) => {
  console.log('i put User')
}

exports.deleteUser = (req, res) => {
  console.log('i delete User')
}
