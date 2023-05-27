import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { authRouter } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'

const app = fastify()
const PORT = 3333

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})

app.register(multipart)
app.register(memoriesRoutes)
app.register(uploadRoutes)
app.register(authRouter)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Application: http://localhost:${PORT}`)
  })
