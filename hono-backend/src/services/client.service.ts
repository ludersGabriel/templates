import { ClientRepo } from '@/db/repo/client.repo'
import type {
  ClientInput,
  ClientModel,
  ClientUpdate,
} from '@/db/schema/client.model'
import { Inject, Service } from 'typedi'

@Service()
export class ClientService {
  @Inject()
  private readonly repo: ClientRepo

  async create(client: ClientInput): Promise<ClientModel> {
    return this.repo.create(client)
  }

  async update(client: ClientUpdate): Promise<ClientModel> {
    return this.repo.update(client)
  }

  async delete(id: ClientModel['id']): Promise<ClientModel> {
    return this.repo.delete(id)
  }

  async find(
    id: ClientModel['id']
  ): Promise<ClientModel | undefined> {
    return this.repo.find(id)
  }
}
