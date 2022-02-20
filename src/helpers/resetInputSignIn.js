import { errorMessageStyle } from '../styles'

import {
  loginAuthorize,
  passwordAuthorize,
} from '../elements'

export const resetInputSignIn = () => {
  [loginAuthorize, passwordAuthorize].forEach(input => {
    Object.assign(input, {
      value: ''
    })
    Object.assign(input.nextElementSibling, {
      style: errorMessageStyle
    })
  })
}
