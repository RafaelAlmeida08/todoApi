const express = require('express')
const userRoutes = express()
const { userFactory } = require('../factory')
const {
  checkCreateFields,
  isRegistered,
  validateEmail,
  isAuthenticated,
  checkUser,
  unlockProjects
} = require('../middlewares')

userRoutes.post('',
  checkCreateFields,
  validateEmail,
  isRegistered,
  (request, response) => userFactory().create(request, response)
)

userRoutes.post('/auth',
  (request, response) => userFactory().auth(request, response)
)

userRoutes.get('',
  (request, response) => userFactory().listAll(request, response))

userRoutes.get('/:id',
  checkUser,
  isAuthenticated,
  unlockProjects,
  (request, response) => userFactory().listOne(request, response))

module.exports = userRoutes
