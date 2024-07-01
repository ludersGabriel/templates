import { UploaderService } from '@/services/uploader.service'
import Container from 'typedi'
import { z } from 'zod'
import { userSchemas, type UserInput } from '@/db/schema/user.model'
import { honoWithJwt } from '..'

const service = Container.get(UploaderService)

export const uploaderRouter = honoWithJwt().post(
  '/users',
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
