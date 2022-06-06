const { StatusCodes } = require('http-status-codes')

const checkIdParam = (request, response, nextFunction) => {
  const { id } = request.params

  if (!id) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide an Id' })
  }

  return nextFunction()
}

module.exports = checkIdParam
