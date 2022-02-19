import {
  setErrorMessage,
  validateEmptyString,
  email,
  password
} from './'

import { emailRule } from '../configs'

export const validateEmail = (value) => {
  const result = Boolean(value.match(emailRule))

  setErrorMessage(email, result)

  validateEmptyString(email, value)

  password.disabled = !result
}
