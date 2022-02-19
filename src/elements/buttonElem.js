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

// import sha256 from 'fast-sha256'

let button

// const hasher = new sha256.Hash()

export const buttonElem = (webElem, container) => {
  // const array = sha256
  //   .hash(password.value)
  // const digest = String.fromCharCode(...array)

  const digest = sha256(password.value)
  console.log(digest)

  button = Object.assign(webElem.createElem(container, 'button'), {
    disabled: true,
    innerText: 'Sign Up',
    style: buttonDisabledStyle,
    onclick: async function (event) {
      await createUser (login.value, {
        name: name.value,
        telephone: telephone.value,
        email: email.value,
        password: digest,
        // password: password.value,
        avatar: window[Symbol.for('photo')].src
      })
    }
  })
}

export {
  button
}
