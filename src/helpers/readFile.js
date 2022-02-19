import { errorMessageStyle } from '../styles'

import {
  avatarMessageError,
  button
}from '../elements'

import {
  showError,
  showDisabledButton
} from './'

export const readFile = (file, elem) => {
  const errorMessages = [
    'Invalid file',
    'Invalid elemHTML',
    'Invalid file type',
    'Image size exceeds 300 kB'
  ]

  if (!(file instanceof File)) return showError(errorMessages[0])

  if (elem?.nodeType !== 1) return showError(errorMessages[1])

  if (file.type.indexOf('image')) {
    showError(errorMessages[2])

    return showDisabledButton(button, false)
  } else {
    avatarMessageError.style = errorMessageStyle

    if (file.size > 300000) {
      showError(errorMessages[3])

    return showDisabledButton(button, false)
    }
    const reader = new FileReader
    reader.onload = function (event) {
      elem.src = event.target.result
    }
    reader.readAsDataURL(file)

    return showDisabledButton(button, true)
  }
}
