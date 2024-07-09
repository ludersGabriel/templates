import { CreditCardRepo } from '@/db/repo/credit-card.repo'
import type {
  CreditCardInput,
  CreditCardModel,
  CreditCardUpdate,
} from '@/db/schema/credit-card.model'
import { Inject, Service } from 'typedi'

@Service()
export class CreditCardService {
  @Inject()
  private readonly repo: CreditCardRepo

  async create(
    creditCard: CreditCardInput
  ): Promise<CreditCardModel> {
    return this.repo.create(creditCard)
  }

  async update(
    creditCard: CreditCardUpdate
  ): Promise<CreditCardModel> {
    return this.repo.update(creditCard)
  }

  async delete(id: CreditCardModel['id']): Promise<CreditCardModel> {
    return this.repo.delete(id)
  }

  async find(
    id: CreditCardModel['id']
  ): Promise<CreditCardModel | undefined> {
    return this.repo.find(id)
  }
}
