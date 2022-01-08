import { errorMessageStyle } from '../styles'

export const emptiValidationStyle = (inputElem, callbackValue) => {
	if (callbackValue.value === '') {
		inputElem.nextElementSibling.style = errorMessageStyle
	}
}