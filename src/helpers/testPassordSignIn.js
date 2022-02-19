import { passwordHandler } from '../data-handlers'

import {
  errorMessageStyle,
  errorMessageActiveStyle,
  buttonDisabledStyle,
  buttonSubmitStyle
} from '../styles'

import { showDisabledButton } from './'

import { sha256 } from 'js-sha256'

// import sha256 from 'fast-sha256'

// const hasher = new sha256.Hash()

export const testPassordSignIn = async (inputElem, property) => {
console.log(passwordHandler())
console.log(property)

  // const arraySignIn = sha256
  //   .hash(property)
  // const digestSignIn = String.fromCharCode(...arraySignIn)
  // console.log(digestSignIn)

  const digestSignIn = sha256(property)
  console.log(digestSignIn)

  // if (passwordHandler() === property) {
  if (passwordHandler() === digestSignIn) {
    Object.assign(inputElem.nextElementSibling, {
      style: errorMessageStyle
    })

    showDisabledButton(window[Symbol.for('buttonSignIn')], false, buttonSubmitStyle)
  } else {
    Object.assign(inputElem.nextElementSibling, {
        style: errorMessageActiveStyle
    })

    showDisabledButton(window[Symbol.for('buttonSignIn')], true, buttonDisabledStyle)
  }
}
