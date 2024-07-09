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
import { clientRouter } from './routes/client.route'
import { HttpStatus, createApexError } from './services/error.service'
import { creditCardRouter } from './routes/credit-card.route'

const app = new Hono()

app.use('*', logger())
app.use('*', prettyJSON())
app.use('*', cors())
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
      return c.json(
        createApexError({
          status: 'error',
          message: 'File is too big. Current limit is 50mb',
          code: HttpStatus.PAYLOAD_TOO_LARGE,
          path: c.req.routePath,
          suggestion: 'Reduce the size of your file and try again',
        }),
        413
      )
    },
  })
)

app.get('/', (c) => c.json({ message: 'sv running on /api' }))

app.route('auth', authRouter)

app
  .basePath('/api')
  .route('/user', userRouter)
  .route('/client', clientRouter)
  .route('/credit-card', creditCardRouter)
  .route('/upload', uploaderRouter)

export default app
export type AppType = typeof app

export function honoWithJwt() {
  return new Hono<{
    Variables: {
      jwtPayload: AuthPayload
    }
  }>()
}
