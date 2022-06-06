const { StatusCodes } = require('http-status-codes')
const { UserModel } = require('../../models')

const check = async (request, response, nextFunction) => {
  const { userId } = request.body
  try {
    const user = await UserModel.findOne({ where: { id: userId } })
    if (!user) {
      return response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' })
    }
    return nextFunction()
  } catch (err) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'Error trying to find user' })
  }
}

module.exports = check
