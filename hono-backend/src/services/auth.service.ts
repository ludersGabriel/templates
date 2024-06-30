import { Inject, Service } from 'typedi'
import { UserService } from './user.service'
import { sign } from 'hono/jwt'
import env from '@/env'
import {
  authPayload,
  verifyPassword,
  type AuthInput,
  type AuthPayload,
} from '@/db/repo/auth.repo'

@Service()
export class AuhtService {
  @Inject()
  private readonly userService: UserService

  async login(input: AuthInput): Promise<string> {
    const user = await this.userService.findByUsername(input.username)

    if (!user) throw new Error('User not found')

    if (!verifyPassword(input.password, user.password))
      throw new Error('Wrong password')

    const payload: AuthPayload = authPayload.parse({
      id: user.id,
      username: user.username,
    })

    const token = await sign(payload, env.APP_SECRET)

    return token
  }
}
