const CreateUserService = require('./user/Create')
const ListAllUsersService = require('./user/ListAll')
const ListOneUser = require('./user/ListOne')
const AuthUserService = require('./user/Auth')

const CreateProjectService = require('./project/Create')
const UpdateProjectService = require('./project/Update')

const CreateTaskService = require('./task/Create')
const DeleteTaskService = require('./task/Delete')

module.exports = {
  CreateUserService,
  CreateProjectService,
  ListAllUsersService,
  CreateTaskService,
  DeleteTaskService,
  UpdateProjectService,
  AuthUserService,
  ListOneUser
}
