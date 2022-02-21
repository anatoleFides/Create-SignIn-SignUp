import {
  createElem,
  createUser,
  login,
  name,
  telephone,
  email,
  password,
  avatar
} from '../helpers'

import { buttonDisabledStyle } from '../styles'

import { sha256 } from 'js-sha256'

let buttonRegistr

export const buttonElemRegistr = (webElem, container) => {
  buttonRegistr = Object.assign(webElem.createElem(container, 'button'), {
    disabled: true,
    innerText: 'Sign Up',
    style: buttonDisabledStyle,
    onclick: async function (event) {
      await createUser (login.value, {
        name: name.value,
        telephone: telephone.value,
        email: email.value,
        password: sha256(password.value),
        avatar: window[Symbol.for('photo')].src
      })
    }
  })
}

export {
  buttonRegistr
}
