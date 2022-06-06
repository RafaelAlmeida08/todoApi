class ProjectController {
  constructor (createProjectService, updateProjectService, httpStatusCode) {
    this.createProjectService = createProjectService
    this.updateProjectService = updateProjectService
    this.httpStatusCode = httpStatusCode
  }

  async create (request, response) {
    const { name, userId } = request.body
    try {
      const project = await this.createProjectService.execute({ name, userId })
      return response.status(this.httpStatusCode.CREATED).json(project)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error creating project' })
    }
  }

  async update (request, response) {
    const { name, projectId } = request.body
    try {
      const projectUpdated = await this.updateProjectService.execute({ name, projectId })
      return response.status(this.httpStatusCode.OK).json(projectUpdated)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error updating project' })
    }
  }
}

module.exports = ProjectController
