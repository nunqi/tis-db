const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')

class Tag extends Model {}

Tag.init({
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Tag',
  tableName: 'Tags'
})

module.exports = Tag