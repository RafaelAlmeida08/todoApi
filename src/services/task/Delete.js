class DeleteTaskService {
  constructor (taskModel) {
    this.taskModel = taskModel
  }

  async execute (taskId) {
    return await this.taskModel.destroy({
      where: { id: taskId }
    })
  }
}

module.exports = DeleteTaskService
