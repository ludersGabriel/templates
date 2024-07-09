import {
  date,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { z } from 'zod'
import clientTable from './client.model'
import { relations, sql } from 'drizzle-orm'

const creditCardTable = pgTable('credit_card', {
  id: uuid('id').primaryKey().defaultRandom(),
  clientId: uuid('client_id')
    .references(() => clientTable.id, { onDelete: 'cascade' })
    .notNull(),
  cardNumber: varchar('card_number', { length: 20 })
    .unique()
    .notNull(),
  cardholderName: varchar('cardholder_name', {
    length: 255,
  }).notNull(),
  expirationDate: date('expiration_date', {
    mode: 'string',
  }).notNull(),
  cvv: varchar('cvv', { length: 5 }).notNull(),
  createdAt: timestamp('created_at', {
    mode: 'string',
  })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', {
    mode: 'string',
  })
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`current_timestamp`),
})

export const creditCardTableRelations = relations(
  creditCardTable,
  ({ one }) => ({
    client: one(clientTable, {
      fields: [creditCardTable.clientId],
      references: [clientTable.id],
    }),
  })
)

const creditCardModelSchema = createSelectSchema(creditCardTable)
const creditCardDtoSchema = creditCardModelSchema.omit({
  cvv: true,
  cardNumber: true,
})
const creditCardInputSchema = createInsertSchema(creditCardTable)
const creditCardUpdateSchema = creditCardInputSchema
  .partial()
  .required({ id: true })

export type CreditCardModel = z.infer<typeof creditCardModelSchema>
export type CreditCardDto = z.infer<typeof creditCardDtoSchema>
export type CreditCardInput = z.infer<typeof creditCardInputSchema>
export type CreditCardUpdate = z.infer<typeof creditCardUpdateSchema>

export const creditCardSchemas = {
  creditCardModelSchema,
  creditCardDtoSchema,
  creditCardInputSchema,
  creditCardUpdateSchema,
}

export default creditCardTable
