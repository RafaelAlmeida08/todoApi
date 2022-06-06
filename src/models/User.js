const sequelize = require('../database')
const { DataTypes } = require('sequelize')
const ProjectModel = require('./Project')

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {})

User.hasMany(ProjectModel, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

module.exports = User
