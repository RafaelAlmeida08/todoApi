const { UserController } = require('../controllers')
const {
  CreateUserService,
  ListAllUsersService,
  AuthUserService,
  ListOneUser
} = require('../services')

const { UserModel, ProjectModel, TaskModel } = require('../models')

const { hash } = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')
const { sign } = require('jsonwebtoken')

const userFactory = () => {
  const createUserService = new CreateUserService(UserModel, hash)
  const listOneUser = new ListOneUser(UserModel, ProjectModel, TaskModel)
  const listAllUsers = new ListAllUsersService(UserModel, ProjectModel, TaskModel)
  const authAuthService = new AuthUserService(sign)

  const userController = new UserController(createUserService, listAllUsers, authAuthService, listOneUser, StatusCodes)
  return userController
}

module.exports = userFactory
