const { StatusCodes } = require('http-status-codes')
const { TaskModel } = require('../../models')

const check = async (request, response, nextFunction) => {
  const { id } = request.params
  try {
    const task = await TaskModel.findByPk(id)
    if (!task) {
      return response.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' })
    }
    return nextFunction()
  } catch (err) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'Error trying to find task' })
  }
}

module.exports = check
