import { Service } from 'typedi'
import db from '@/db'
import userTable, {
  userSchemas,
  type UserInput,
  type UserModel,
} from '../schema/user.model'
import { z } from 'zod'
import { eq } from 'drizzle-orm'

@Service()
export class UserRepo {
  async findMany(): Promise<UserModel[]> {
    return z.array(userSchemas.userModelSchema).parse(
      await db.query.userTable.findMany({
        limit: 100,
      })
    )
  }

  async findByUsername(
    username: UserModel['username']
  ): Promise<UserModel | null> {
    const user = await db.query.userTable.findFirst({
      where: eq(userTable.username, username),
    })

    if (!user) return null

    return userSchemas.userModelSchema.parse(user)
  }

  async create(user: UserInput, tx?: db): Promise<UserModel> {
    const repo = tx ?? db

    const [ret] = await repo
      .insert(userTable)
      .values(user)
      .returning()

    return userSchemas.userModelSchema.parse(ret)
  }

  async createMany(
    users: UserInput[],
    tx?: db
  ): Promise<UserModel[]> {
    const repo = tx ?? db

    return z
      .array(userSchemas.userModelSchema)
      .parse(await repo.insert(userTable).values(users).returning())
  }

  async uploadUsers(users: UserInput[]): Promise<UserModel[]> {
    return await db.transaction(async (tx) => {
      return z
        .array(userSchemas.userModelSchema)
        .parse(await tx.insert(userTable).values(users).returning())
    })
  }
}
