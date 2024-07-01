import { Hono } from 'hono'
import { logger } from 'hono/logger'

import { userRouter } from './routes/user.routes'
import { authRouter } from './routes/auth.route'
import { jwt } from 'hono/jwt'
import env from './env'
import type { AuthPayload } from './db/repo/auth.repo'
import { uploaderRouter } from './routes/uploader.route'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import { bodyLimit } from 'hono/body-limit'

const app = new Hono()

app.use('*', logger())
app.use('*', prettyJSON())
app.use('/api/*', cors())
app.use(
  '/api/*',
  jwt({
    secret: env.APP_SECRET,
  })
)
app.use(
  '/api/upload',
  bodyLimit({
    maxSize: 50 * 1024 * 1024, // 50mb
    onError(c) {
      return c.json('overflow', 413)
    },
  })
)

app.get('/', (c) => c.json({ message: 'sv running on /api' }))

app.route('auth', authRouter)

const api = app.basePath('/api')
api.route('/user', userRouter)
api.route('/upload', uploaderRouter)

export default app
export type AppType = typeof app

export function honoWithJwt() {
  return new Hono<{
    Variables: {
      jwtPayload: AuthPayload
    }
  }>()
}
