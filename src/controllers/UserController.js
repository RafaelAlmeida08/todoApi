class UserController {
  constructor (createUserService, listAllUsersService, authUserService, listOneUserService, httpStatusCode) {
    this.createUserService = createUserService
    this.httpStatusCode = httpStatusCode
    this.authUserService = authUserService
    this.listOneUserService = listOneUserService
    this.listAllUsersService = listAllUsersService
  }

  async create (request, response) {
    const { name, email, password } = request.body
    try {
      const user = await this.createUserService.execute({
        name,
        email,
        password
      })
      return response.status(this.httpStatusCode.CREATED).json(user)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error creating user' })
    }
  }

  async listAll (request, response) {
    try {
      const list = await this.listAllUsersService.execute()
      return response.status(this.httpStatusCode.CREATED).json(list)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error listing users' })
    }
  }

  async auth (request, response) {
    const { userId } = request.body
    try {
      const token = await this.authUserService.execute(userId)
      return response.status(this.httpStatusCode.CREATED).json(token)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error authenticating user' })
    }
  }

  async listOne (request, response) {
    const { id } = request.params
    try {
      const user = await this.listOneUserService.execute(id)
      return response.status(this.httpStatusCode.OK).json(user)
    } catch (error) {
      console.error(error)
      return response.status(this.httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error finding user' })
    }
  }
}

module.exports = UserController
