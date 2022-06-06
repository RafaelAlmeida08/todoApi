const { StatusCodes } = require('http-status-codes')

const validateEmail = (request, response, nextFunction) => {
  const { email } = request.body
  const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const result = expression.test(email)
  if (!result) {
    return response.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide a valid email' })
  }
  nextFunction()
}

module.exports = validateEmail
