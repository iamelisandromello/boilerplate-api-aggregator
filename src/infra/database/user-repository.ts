import { LoadNameRepository } from '@/application/contracts/database'

export class UserRepository implements LoadNameRepository {
  async charge (user: string): Promise<string | false> {
    return 'Elisandro M Correa'
  }
}
