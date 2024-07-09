import { userSchemas } from '@/db/schema/user.model'
import { UserService } from '@/services/user.service'
import { Container } from 'typedi'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { honoWithJwt } from '..'

const service = Container.get(UserService)

export const userRouter = honoWithJwt()
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
  .get('/users', async (c) => {
    const p = c.get('jwtPayload')

    console.log({ p })

    const users = await service.findMany()

    const ret = z.array(userSchemas.userDtoSchema).parse(users)

    return c.json({ users: ret })
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
