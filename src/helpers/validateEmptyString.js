import { errorMessageStyle } from '../styles'

export const validateEmptyString = (inputElem, property) => {
	if (property === '') {
		inputElem.nextElementSibling.style = errorMessageStyle
	}
}