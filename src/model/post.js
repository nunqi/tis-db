const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')

const Comment = require('./comment')
const Tag = require('./tag')

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

Post.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Comment.belongsTo(Post, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

Post.belongsToMany(Tag, { through: 'Post_Tag' })
Tag.belongsToMany(Post, { through: 'Post_Tag' })

module.exports = Post