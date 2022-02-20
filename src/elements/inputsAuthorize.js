import { createElem } from './'

import {
  inputStyle,
  errorMessageStyle
} from '../styles'

let loginAuthorize, passwordAuthorize

export const inputsAuthorize = (webElem, container) => {
  [loginAuthorize, passwordAuthorize] = [
    ['text', 'Login', 'Login not found'],
    ['password', 'Password', 'Invalid passvord']
  ].map(function (item) {
    const elem__container = webElem.createElem(container, 'div')

    const elem = Object.assign(webElem.createElem(elem__container, 'input'), {
      type: item[0],
      placeholder: item[1],
      style: inputStyle
    })

    const error__message = Object.assign(webElem.createElem(elem__container, 'p'), {
      textContent: item[2],
      style: errorMessageStyle
    })

    return elem
  })
}

export {
  loginAuthorize,
  passwordAuthorize
}
