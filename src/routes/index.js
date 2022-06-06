const express = require('express')
const projectRoutes = require('./project-routes')
const taskRoutes = require('./task-routes')
const userRoutes = require('./user-routes')
const routes = express()

routes.use('/users', userRoutes)
routes.use('/projects', projectRoutes)
routes.use('/tasks', taskRoutes)

module.exports = routes
