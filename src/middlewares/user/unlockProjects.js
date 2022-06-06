const { decode } = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const unlockProjects = (request, response, nextFunction) => {
  const tokenProvided = request.headers.authorization
  const [, token] = tokenProvided.split(' ')
  const idProvided = decode(token).sub

  console.log(idProvided)

  const idParam = request.params.id

  if (idProvided !== idParam) {
    return response.status(StatusCodes.UNAUTHORIZED).json({ message: "You can't access that route" })
  }
  nextFunction()
}

module.exports = unlockProjects
