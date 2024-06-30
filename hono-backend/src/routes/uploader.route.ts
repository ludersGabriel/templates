import { UploaderService } from '@/services/uploader.service'
import { Hono } from 'hono'
import Container from 'typedi'
import type { Variables } from '..'
import { bodyLimit } from 'hono/body-limit'
import { z } from 'zod'
import { userSchemas, type UserInput } from '@/db/schema/user.model'

const service = Container.get(UploaderService)

export const uploaderRouter = new Hono<{
  Variables: Variables
}>().post(
  '/users',
  bodyLimit({
    maxSize: 50 * 1024 * 1024, // 500 mb
    onError: (c) => {
      return c.text('overflow', 413)
    },
  }),
  async (c) => {
    const body = await c.req.parseBody()
    const file = body['file']

    console.log(body)
    console.log(file)

    if (!(file instanceof File) || file.type !== 'text/csv')
      return c.text('Wrong format', 422)

    try {
      const data = (await file.text()).split('\n')
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

      await service.uploadUsers(
        z.array(userSchemas.userInputSchema).parse(users)
      )

      return c.json({ message: 'uploaded' })
    } catch (e) {
      console.log(e)
      return c.text('Failed to upload', 422)
    }
  }
)
