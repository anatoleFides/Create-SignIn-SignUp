import { createElem } from './'

import {
  inputStyle,
  errorMessageStyle
} from '../styles'

let login, name, telephone, email, password

export function getInputs (webElem, container) {
  [login, name, telephone, email, password] = [
    ['text', 'Login', 'Invalid login format', false],
    ['text', 'User name', 'Invalid name format', true],
    ['tel', '(0XX)XXX-XX-XX', 'Invalid telephone format', true],
    ['email', 'e-mail', 'Invalid e-mail format', true],
    ['password', 'Password', 'Invalid password format', true]
  ].map(function (item) {
    const elem__container = webElem.createElem(container, 'div')

    const elem = Object.assign(webElem.createElem(elem__container, 'input'), {
      type: item[0],
      placeholder: item[1],
      style: inputStyle,
      disabled: item[3]
    })

    const error__message = Object.assign(webElem.createElem(elem__container, 'p'), {
      textContent: item[2],
      style: errorMessageStyle
    })

    return elem
  })
}

export {
  login,
  name,
  telephone,
  email,
  password
}
