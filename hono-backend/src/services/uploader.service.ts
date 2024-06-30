import { Inject, Service } from 'typedi'
import { UserService } from './user.service'
import type { UserInput, UserModel } from '@/db/schema/user.model'

@Service()
export class UploaderService {
  @Inject()
  private readonly userService: UserService

  async uploadUsers(users: UserInput[]): Promise<UserModel[]> {
    return await this.userService.uploadUsers(users)
  }
}
