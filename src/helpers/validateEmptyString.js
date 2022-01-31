import { errorMessageStyle } from '../styles'

export const validateEmptyString = (inputElem, property) => {

	console.log(property.length)
	if (property.length === 0) {
		inputElem.nextElementSibling.style = errorMessageStyle
	}
}