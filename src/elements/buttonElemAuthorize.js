import {
  createElem,
  authorizeUser
} from '../helpers'

import {
  loginAuthorize,
  passwordAuthorize
} from './'

import { buttonDisabledStyle } from '../styles'

let buttonAuthorize

export const buttonElemAuthorize = (webElem, container) => {
  buttonAuthorize = Object.assign(webElem.createElem(container, 'button'), {
    innerText: 'Sign In',
    style: buttonDisabledStyle,
    disabled: true,
    onclick: async function (event) {
      await authorizeUser({
        login: loginAuthorize.value,
        password: passwordAuthorize.value
      })
    }
  })
}

export {
  buttonAuthorize
}
