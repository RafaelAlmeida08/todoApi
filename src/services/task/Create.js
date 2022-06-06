class CreateTaskService {
  constructor (taskModel) {
    this.taskModel = taskModel
  }

  async execute ({ description, projectId }) {
    return await this.taskModel.create({ description, projectId })
  }
}

module.exports = CreateTaskService
