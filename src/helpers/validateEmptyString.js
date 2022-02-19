import { errorMessageStyle } from '../styles'

export const validateEmptyString = (inputElem, property) => {
  property.length === 0 && Object.assign(inputElem.nextElementSibling, {
    style: errorMessageStyle
  })
}
