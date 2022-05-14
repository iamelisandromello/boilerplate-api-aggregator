import { Validation } from '@/presentation/interfaces'
import { RequireFieldValidation, EmailValidation } from '@/validation/validators'
import { ValidationComposite } from '@/validation/validation-composite'
import { EmailValidatorAdapter } from '@/infra/validators'

export const makeValidationExampleFactory = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['user', 'email']) {
    validations.push(new RequireFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
