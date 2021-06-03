const config = require('../config/db.config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../models/user.model')(sequelize, Sequelize)
db.tag = require('../models/tag.model')(sequelize, Sequelize)

db.user.belongsToMany(db.tag, {
  through: 'userTag',
  foreignKey: 'userId',
  otherKey: 'creator',
})
db.tag.belongsTo(db.user, {
  through: 'userTag',
  foreignKey: 'creator',
  otherKey: 'userId',
})
module.exports = db
