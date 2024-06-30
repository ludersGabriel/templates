import db from '@/db'
import { type UserInput } from '@/db/schema/user.model'
import { UserService } from '@/services/user.service'
import { Hono } from 'hono'
import { bodyLimit } from 'hono/body-limit'
import Container from 'typedi'

const userService = Container.get(UserService)

export const fileRouter = new Hono().post(
  '/',
  bodyLimit({
    maxSize: 50 * 1024 * 1024, // 50 MB
    onError: (c) => {
      return c.text('overflow', 413)
    },
  }),
  async (c) => {
    const body = await c.req.parseBody()
    const file = body['data']

    if (!(file instanceof File) || file.type !== 'text/csv')
      return c.text('Wrong format', 422)

    try {
      const data = (await file.text()).split('\n')
      data.shift() // remove header

      await db.transaction(async (tx) => {
        const users: UserInput[] = []

        for (const line of data) {
          const split = line.split(',')
          const input: UserInput = {
            username: split[1],
            name: split[2],
            password: '1234mudar',
          }

          users.push(input)
        }

        await userService.createMany(users, tx)
      })

      return c.json({ message: 'uploaded' })
    } catch {
      return c.text('Failed to upload', 422)
    }
  }
)
