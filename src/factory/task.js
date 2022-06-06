const { TaskController } = require('../controllers')
const { CreateTaskService, DeleteTaskService } = require('../services')
const { TaskModel } = require('../models')

const { StatusCodes } = require('http-status-codes')

const taskFactory = () => {
  const createTaskService = new CreateTaskService(TaskModel)
  const deleteTaskService = new DeleteTaskService(TaskModel)
  const taskController = new TaskController(createTaskService, deleteTaskService, StatusCodes)
  return taskController
}

module.exports = taskFactory
