import { authSchema } from '@/db/repo/auth.repo'
import { AuhtService } from '@/services/auth.service'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import Container from 'typedi'

const service = Container.get(AuhtService)

export const authRouter = new Hono().post(
  '/',
  zValidator('json', authSchema),
  async (c) => {
    try {
      const input = await c.req.valid('json')

      const token = await service.login(input)

      return c.json({ token })
    } catch (e) {
      console.log(e)
      return c.notFound()
    }
  }
)
