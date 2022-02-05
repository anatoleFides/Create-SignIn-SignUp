import { errorMessageStyle } from '../styles'

export const validateEmptyString = (inputElem, property) => {
	if (property.length === 0) {
		inputElem.nextElementSibling.style = errorMessageStyle
	}
}
