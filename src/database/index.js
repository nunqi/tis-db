const { Sequelize } = require('sequelize')
const path = require('path');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(path.dirname(require.main.filename), "data.db")
});

module.exports = sequelize