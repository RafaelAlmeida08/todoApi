const express = require('express')
const taskRoutes = express()
const { taskFactory } = require('../factory')
const ensureTaskExist = require('../middlewares/tasks/ensureTaskExists')

taskRoutes.post('',
  (request, response) => taskFactory().create(request, response)
)

taskRoutes.delete('/:id',
  ensureTaskExist,
  (request, response) => taskFactory().delete(request, response)
)

module.exports = taskRoutes
