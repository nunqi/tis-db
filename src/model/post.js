const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Post',
  tableName: 'Posts'
})

module.exports = Post