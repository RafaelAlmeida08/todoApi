require('dotenv/config')
const { StatusCodes } = require('http-status-codes')
const { verify } = require('jsonwebtoken')

const isAuthenticated = async (request, response, nextFunction) => {
  const [, token] = request.headers.authorization.split(' ')
  if (!token) {
    return response.status(StatusCodes.UNAUTHORIZED).json({ message: 'Please provide a token to continue' })
  }
  try {
    verify(token, process.env.TOKEN_KEY)
    nextFunction()
  } catch (error) {
    return response.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' })
  }
}

module.exports = isAuthenticated
