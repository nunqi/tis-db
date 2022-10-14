const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comment',
  tableName: 'Comments'
})

module.exports = Comment