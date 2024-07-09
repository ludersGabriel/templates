import { relations, sql } from 'drizzle-orm'
import {
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'
import creditCardTable, {
  creditCardSchemas,
} from './credit-card.model'

const clientTable = pgTable('client', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  cnpj: varchar('cnpj', { length: 20 }).unique().notNull(),
  industry: varchar('industry', { length: 50 }),
  hqAddress: varchar('hq_address', { length: 255 }),
  phone: varchar('phone', { length: 20 }),
  email: varchar('email', { length: 255 }).unique(),
  contactPerson: varchar('contact_person', { length: 255 }),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`current_timestamp`),
})

export const clientTableRelations = relations(
  clientTable,
  ({ many }) => ({
    creditCards: many(creditCardTable),
  })
)

const clientModelSchema = createSelectSchema(clientTable).extend({
  creditCards: creditCardSchemas.creditCardModelSchema
    .array()
    .optional(),
})
const clientDtoSchema = clientModelSchema
const clientInputSchema = createInsertSchema(clientTable, {
  email: (schema) => schema.email.email(),
})
const clientUpdateSchema = clientInputSchema
  .partial()
  .required({ id: true })

export type ClientModel = z.infer<typeof clientModelSchema>
export type ClientDto = z.infer<typeof clientDtoSchema>
export type ClientInput = z.infer<typeof clientInputSchema>
export type ClientUpdate = z.infer<typeof clientUpdateSchema>

export const clientSchemas = {
  clientModelSchema,
  clientDtoSchema,
  clientInputSchema,
  clientUpdateSchema,
}

export default clientTable
