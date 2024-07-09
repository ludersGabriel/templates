import { Service } from 'typedi'
import type {
  ClientInput,
  ClientModel,
  ClientUpdate,
} from '../schema/client.model'
import db from '..'
import clientTable, { clientSchemas } from '../schema/client.model'
import { eq } from 'drizzle-orm'

@Service()
export class ClientRepo {
  async create(client: ClientInput): Promise<ClientModel> {
    const [ret] = await db
      .insert(clientTable)
      .values(client)
      .returning()

    return clientSchemas.clientModelSchema.parse(ret)
  }

  async update(client: ClientUpdate): Promise<ClientModel> {
    const [ret] = await db
      .update(clientTable)
      .set(client)
      .where(eq(clientTable.id, client.id))
      .returning()

    return clientSchemas.clientModelSchema.parse(ret)
  }

  async delete(id: ClientModel['id']): Promise<ClientModel> {
    const [ret] = await db
      .delete(clientTable)
      .where(eq(clientTable.id, id))
      .returning()

    return clientSchemas.clientModelSchema.parse(ret)
  }

  async find(
    id: ClientModel['id']
  ): Promise<ClientModel | undefined> {
    const client = await db.query.clientTable.findFirst({
      where: eq(clientTable.id, id),
    })

    return clientSchemas.clientModelSchema.parse(client)
  }

  async findMany(): Promise<ClientModel[]> {
    return clientSchemas.clientModelSchema
      .array()
      .parse(await db.query.clientTable.findMany())
  }
}
