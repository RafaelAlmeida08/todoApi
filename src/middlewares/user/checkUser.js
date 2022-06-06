const { StatusCodes } = require('http-status-codes')
const { UserModel } = require('../../models')

const checkUser = async (request, response, nextFunction) => {
  const { id } = request.params

  const user = await UserModel.findByPk(id)

  if (!user) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' })
  }

  return nextFunction()
}

module.exports = checkUser
