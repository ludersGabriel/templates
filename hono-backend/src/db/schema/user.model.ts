import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

const userTable = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  username: varchar('username').unique().notNull(),
  password: varchar('password').notNull(),
  name: varchar('name').notNull(),
})

const userInputSchema = createInsertSchema(userTable)
const userModelSchema = createSelectSchema(userTable)
const userDtoSchema = createSelectSchema(userTable).omit({
  password: true,
})

export type UserInput = z.infer<typeof userInputSchema>
export type UserModel = z.infer<typeof userModelSchema>
export type UserDto = z.infer<typeof userDtoSchema>

export const userSchemas = {
  userInputSchema,
  userModelSchema,
  userDtoSchema,
}

export default userTable
