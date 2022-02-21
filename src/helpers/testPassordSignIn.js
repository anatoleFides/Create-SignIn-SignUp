import { passwordHandler } from '../data-handlers'

import {
  showDisabledButton,
  setErrorMessage
} from './'

import { buttonAuthorize } from '../elements'

import { sha256 } from 'js-sha256'

export const testPassordSignIn = async (inputElem, property) => {
  const result = passwordHandler() === sha256(property)

  setErrorMessage(inputElem, result)

  showDisabledButton(buttonAuthorize, result)
}
