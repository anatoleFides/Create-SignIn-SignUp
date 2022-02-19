import {
  setErrorMessage,
  validateEmptyString,
  telephone,
  email
} from './'

import { telephoneRule } from '../configs'

export const validatePhone = (value) => {
  const result = Boolean(value.match(telephoneRule))

  setErrorMessage(telephone, result)

  validateEmptyString(telephone, value)

  email.disabled = !result
}
