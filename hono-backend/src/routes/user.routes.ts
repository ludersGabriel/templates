import { userSchemas } from '@/db/schema/user.model'
import { UserService } from '@/services/user.service'
import { Hono } from 'hono'
import { Container } from 'typedi'
import { z } from 'zod'
import type { Variables } from '..'
import { zValidator } from '@hono/zod-validator'

const service = Container.get(UserService)

export const userRouter = new Hono<{
  Variables: Variables
}>()
  .get('/', async (c) => {
    const p = c.get('jwtPayload')

    console.log({ p })

    const users = await service.findMany()

    const ret = z.array(userSchemas.userDtoSchema).parse(users)

    return c.json({ users: ret })
  })
  .get('/:username', async (c) => {
    try {
      const username = c.req.param('username')
      const user = await service.findByUsername(username)
      const ret = userSchemas.userDtoSchema.parse(user)

      return c.json({ user: ret })
    } catch {
      return c.notFound()
    }
  })
  .post(
    '/create',
    zValidator('json', userSchemas.userInputSchema),
    async (c) => {
      try {
        const input = await c.req.valid('json')

        const user = userSchemas.userDtoSchema.parse(
          await service.create(input)
        )

        return c.json({ user })
      } catch (e) {
        return c.text('could not create')
      }
    }
  )
