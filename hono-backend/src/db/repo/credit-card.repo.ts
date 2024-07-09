import { Service } from 'typedi'
import type {
  CreditCardInput,
  CreditCardModel,
  CreditCardUpdate,
} from '../schema/credit-card.model'
import creditCardTable, {
  creditCardSchemas,
} from '../schema/credit-card.model'
import db from '..'
import { eq } from 'drizzle-orm'

@Service()
export class CreditCardRepo {
  async create(
    creditCard: CreditCardInput
  ): Promise<CreditCardModel> {
    const [ret] = await db
      .insert(creditCardTable)
      .values(creditCard)
      .returning()

    return creditCardSchemas.creditCardModelSchema.parse(ret)
  }

  async update(
    creditCard: CreditCardUpdate
  ): Promise<CreditCardModel> {
    const [ret] = await db
      .update(creditCardTable)
      .set(creditCard)
      .where(eq(creditCardTable.id, creditCard.id))
      .returning()

    return creditCardSchemas.creditCardModelSchema.parse(ret)
  }

  async delete(id: CreditCardModel['id']): Promise<CreditCardModel> {
    const [ret] = await db
      .delete(creditCardTable)
      .where(eq(creditCardTable.id, id))
      .returning()

    return creditCardSchemas.creditCardModelSchema.parse(ret)
  }

  async find(
    id: CreditCardModel['id']
  ): Promise<CreditCardModel | undefined> {
    const creditCard = await db.query.creditCardTable.findFirst({
      where: eq(creditCardTable.id, id),
    })

    return creditCardSchemas.creditCardModelSchema.parse(creditCard)
  }

  async findMany(): Promise<CreditCardModel[]> {
    return creditCardSchemas.creditCardModelSchema
      .array()
      .parse(await db.query.creditCardTable.findMany())
  }
}
