const { StatusCodes } = require('http-status-codes')

const checkCreateFields = (request, response, nextFunction) => {
  const { name, userId } = request.body

  if (!name || !userId) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'Please fill all the required fields' })
  }
  return nextFunction()
}

module.exports = checkCreateFields
