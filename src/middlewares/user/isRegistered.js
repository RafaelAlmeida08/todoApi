const { StatusCodes } = require('http-status-codes')
const { UserModel } = require('../../models')

const isRegistered = async (request, response, nextFunction) => {
  const { email } = request.body
  const user = await UserModel.findOne({
    where: { email }
  })
  if (user) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'User already exists. Please provide a diferent email' })
  }
  nextFunction()
}

module.exports = isRegistered
