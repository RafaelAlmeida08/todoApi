class UpdateProjectService {
  constructor (projectModel) {
    this.projectModel = projectModel
  }

  async execute ({ name, projectId }) {
    await this.projectModel.update({ name }, {
      where: {
        id: projectId
      }
    })
    return await this.projectModel.findByPk(projectId, {
      attributes: [
        'name',
        'updatedAt'
      ]
    })
  }
}

module.exports = UpdateProjectService
