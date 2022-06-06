class TaskController {
  constructor (createTaskService, deleteTaskService, httpStatusCode) {
    this.createTaskService = createTaskService
    this.deleteTaskService = deleteTaskService
    this.httpStatusCode = httpStatusCode
  }

  async create (request, response) {
    const { description, projectId } = request.body
    try {
      const task = await this.createTaskService.execute({ description, projectId })
      return response.status(this.httpStatusCode.CREATED).json(task)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.BAD_REQUEST).json({ message: 'Error creating task' })
    }
  }

  async delete (request, response) {
    const { id } = request.params
    try {
      await this.deleteTaskService.execute(id)
      return response.status(this.httpStatusCode.OK).json({ message: 'Task deleted successfully' })
    } catch (error) {
      return response.status(this.httpStatusCode.BAD_REQUEST).json({ message: 'Error deleting task' })
    }
  }
}

module.exports = TaskController
