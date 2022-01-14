import { errorMessageStyle } from '../styles'

export const validateEmptyString = (inputElem, callbackValue) => {
	if (callbackValue.value === '') {
		inputElem.nextElementSibling.style = errorMessageStyle
	}
}