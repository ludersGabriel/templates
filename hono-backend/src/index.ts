import { Hono } from 'hono'
import { logger } from 'hono/logger'

import { userRouter } from './routes/user.routes'
import { authRouter } from './routes/auth.route'
import { jwt } from 'hono/jwt'
import env from './env'
import type { AuthPayload } from './db/repo/auth.repo'
import { uploaderRouter } from './routes/uploader.route'

export type Variables = {
  jwtPayload: AuthPayload
}

const app = new Hono()

app.use('*', logger())

app.use(
  '/api/*',
  jwt({
    secret: env.APP_SECRET,
  })
)

app.basePath('/').route('auth', authRouter)

app
  .basePath('/api')
  .route('users', userRouter)
  .route('uploader', uploaderRouter)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
export type AppType = typeof app
