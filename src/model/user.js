const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')

const Post = require('./post')
const Comment = require('./comment')

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
})

User.hasMany(Post, { foreignKey: { allowNull: true }, onDelete: 'SET NULL' })
Post.belongsTo(User, { foreignKey: { allowNull: true }, onDelete: 'SET NULL' })

User.hasMany(Comment, { foreignKey: { allowNull: true }, onDelete: 'SET NULL' })
Comment.belongsTo(User, { foreignKey: { allowNull: true }, onDelete: 'SET NULL' })

module.exports = User