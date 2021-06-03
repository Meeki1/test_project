module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define('tags', {
    creator: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING(40),
    },
    sortOrder: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  })
  return Tag
}
