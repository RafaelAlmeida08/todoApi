const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('Task', {
  description: DataTypes.TEXT,
  projectId: DataTypes.INTEGER
}, {
  updatedAt: false
})

module.exports = Task
