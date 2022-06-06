class CreateProjectService {
  constructor (projectModel) {
    this.projectModel = projectModel
  }

  async execute ({ name, userId }) {
    return await this.projectModel.create({
      name, userId
    })
  }
}

module.exports = CreateProjectService
