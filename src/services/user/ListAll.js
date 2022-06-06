class ListAllUsers {
  constructor (userModel, projectModel, taskModel) {
    this.userModel = userModel
    this.projectModel = projectModel
    this.taskModel = taskModel
  }

  async execute () {
    return await this.userModel.findAll({
      attributes: [
        'name'
      ],
      include: [
        {
          model: this.projectModel,
          attributes: [
            'name',
            'createdAt'
          ],
          // required: true,
          include: [
            {
              model: this.taskModel,
              attributes: [
                'description',
                'createdAt']
              // required: true
            }
          ]
        }
      ]
    })
  }
}

module.exports = ListAllUsers
