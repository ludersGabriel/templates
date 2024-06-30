import type { z } from 'zod'
import { userSchemas, type UserModel } from '../schema/user.model'

export function hashPassword(pass: UserModel['password']) {
  return Bun.password.hashSync(pass, {
    memoryCost: 4,
    timeCost: 3,
    algorithm: 'argon2id',
  })
}

export function verifyPassword(
  pass: UserModel['password'],
  hash: UserModel['password']
) {
  return Bun.password.verifySync(pass, hash)
}

export const authSchema = userSchemas.userModelSchema.pick({
  username: true,
  password: true,
})

export const authPayload = userSchemas.userModelSchema.pick({
  id: true,
  username: true,
})

export type AuthPayload = z.infer<typeof authPayload>

export type AuthInput = z.infer<typeof authSchema>
