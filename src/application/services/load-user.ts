import { LoadUser } from '@/domain/usecases'
import { LoadNameRepository } from '@/application/contracts/database'

export class LoadUserService implements LoadUser {
  constructor (
    private readonly loadNameRepository: LoadNameRepository
  ) {}

  async load (user: string): Promise<string | false> {
    const name = await this.loadNameRepository.charge(user)

    return name
  }
}
