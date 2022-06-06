const sequelize = require('../database')
const { DataTypes } = require('sequelize')
const TaskModel = require('./Task')

const Project = sequelize.define('Project', {
  name: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {})

Project.hasMany(TaskModel, {
  foreignKey: 'projectId',
  onDelete: 'CASCADE'
})

module.exports = Project
