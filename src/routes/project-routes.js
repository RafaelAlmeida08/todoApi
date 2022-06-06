const express = require('express')
const projectRoutes = express()
const { projectFactory } = require('../factory')
const { checkCreateProjectFields, checkUserExists } = require('../middlewares')

projectRoutes.post('',
  checkCreateProjectFields,
  checkUserExists,
  (request, response) => projectFactory().create(request, response)
)

projectRoutes.put('/:id',
  (request, response) => projectFactory().update(request, response)
)

module.exports = projectRoutes
