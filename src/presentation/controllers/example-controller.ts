import { Controller } from '@/presentation/controllers/controller-abstract'
import { HttpResponse, success, badRequest } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { LoadUser } from '@/domain/usecases'
import { Validation } from '../interfaces'

type Request = { user: string, email: string }

export class ExampleController extends Controller {
  constructor (
    private readonly loadUser: LoadUser,
    private readonly validation: Validation
  ) { super() }

  override async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)

    const { user, email } = request
    const name = await this.loadUser.load(user)

    if (name) return success({ user, name, email })
    return badRequest(new InvalidParamError('user'))
  }
}
