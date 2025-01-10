import express from 'express'
import userRoutes from './userRoutes.js'
import habitRoutes from './habitRoutes.js'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Bienvenido' })
})

routes.use('/users', userRoutes)
routes.use('/habit', habitRoutes)


export default routes
