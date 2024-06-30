import env from '@/env'
import { connection, db } from '@/db'
import { Table, getTableName, sql } from 'drizzle-orm'
import * as schema from '@/db/schema'
import * as seeds from '@/db/seeds'

if (!env.DB_SEEDING) {
  throw new Error('You must sed DB_SEEDING to "true" when seeding')
}

async function resetTable(db: db, table: Table) {
  return db.execute(
    sql.raw(
      `TRUNCATE TABLE "${getTableName(table)}" RESTART IDENTITY CASCADE`
    )
  )
}

for (const table of schema.tables) {
  await resetTable(db, table)
}

await seeds.userSeed(db)

await connection.end()
