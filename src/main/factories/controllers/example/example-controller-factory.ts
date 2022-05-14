import { Controller } from '@/presentation/controllers/controller-abstract'
import { ExampleController } from '@/presentation/controllers'
import { makeValidationExampleFactory } from '@/main/factories/controllers/example'
import { LoadUserService } from '@/application/services'
import { UserRepository } from '@/infra/database'

export const makeExampleController = (): Controller => {
  const repository = new UserRepository()
  const loadUserService = new LoadUserService(repository)
  const validations = makeValidationExampleFactory()
  return new ExampleController(loadUserService, validations)
}
