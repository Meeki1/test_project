const db = require('../models')
const User = db.user

checkValidPassword = (req, res, next) => {
  const regularValue = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  if (regularValue.exec(req.body.password) == null) {
    res.status(400).send({
      message:
        'Failed! Password must be with 1 high register, 1 down register, 1 numeral and min length password 8 symbols!',
    })
    return
  }
  next()
}
checkDuplicateNickNameOrEmail = (req, res, next) => {
  // Nickname
  User.findOne({
    where: {
      nickname: req.body.nickname,
    },
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Nickname is already in use!',
      })
      return
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: 'Failed! Email is already in use!',
        })
        return
      }

      next()
    })
  })
}

const verifySignUp = {
  checkDuplicateNickNameOrEmail: checkDuplicateNickNameOrEmail,
  checkValidPassword: checkValidPassword,
}

module.exports = verifySignUp
