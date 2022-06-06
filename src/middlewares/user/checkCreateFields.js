const { StatusCodes } = require('http-status-codes')

const checkCreateFields = (request, response, nextFunction) => {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'Please fill all required fields' })
  }

  return nextFunction()
}

module.exports = checkCreateFields
