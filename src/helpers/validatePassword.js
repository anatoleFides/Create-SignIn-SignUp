import {
  setErrorMessage,
  validateEmptyString,
  password
} from './'

import { passwordRule } from '../configs'

import { avatar } from '../elements'

import { sha256 } from 'js-sha256'

export const validatePassword = (value) => {
  const digest = sha256(value)
  console.log(digest)

  const result = Boolean(value.match(passwordRule))

  password.style.color = result ? '#090' : '#f00'

  setErrorMessage(password, result)

  validateEmptyString(password, value)

  avatar.disabled = !result
}
