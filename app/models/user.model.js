module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    email: {
      type: Sequelize.STRING(100),
      validate: {
        isEmail: true,
        notEmpty: true,
      },
      unique: true,
    },
    password: {
      type: Sequelize.STRING(100),
    },
    nickname: {
      type: Sequelize.STRING(30),
    },
  })

  return User
}
