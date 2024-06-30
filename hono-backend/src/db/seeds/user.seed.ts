import type db from '@/db'
import userTable, { type UserInput } from '../schema/user.model'
import { hashPassword } from '../repo/auth.repo'

export default async function seed(db: db) {
  await db.insert(userTable).values(usersData)
}

const usersData: UserInput[] = [
  {
    username: 'admin',
    password: hashPassword('1234mudar'),
    name: 'Admin name',
  },
  {
    username: 'client user',
    password: hashPassword('1234mudar'),
    name: 'Client name',
  },
]
