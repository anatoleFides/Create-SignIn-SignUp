import {
  errorMessageStyle,
  errorMessageActiveStyle
} from '../styles'

export const setErrorMessage = (inputElem, validationResult) => {
  inputElem.nextElementSibling.style = validationResult 
    ? errorMessageStyle : errorMessageActiveStyle
}
