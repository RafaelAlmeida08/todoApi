const { ProjectController } = require('../controllers')
const { CreateProjectService, UpdateProjectService } = require('../services')
const { ProjectModel } = require('../models')

const { StatusCodes } = require('http-status-codes')

const projectFactory = () => {
  const createProjectService = new CreateProjectService(ProjectModel)
  const updateProjectService = new UpdateProjectService(ProjectModel)
  const projectController = new ProjectController(createProjectService, updateProjectService, StatusCodes)
  return projectController
}

module.exports = projectFactory
