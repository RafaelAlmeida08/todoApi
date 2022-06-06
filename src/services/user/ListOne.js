class ListOneUser {
  constructor (userModel, projectModel, taskModel) {
    this.userModel = userModel
    this.projectModel = projectModel
    this.taskModel = taskModel
  }

  async execute (userId) {
    return await this.userModel.findByPk(userId, {
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

module.exports = ListOneUser
