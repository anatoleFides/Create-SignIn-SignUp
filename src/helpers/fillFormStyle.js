import {
	inputValidationStyle,
	inputStyle
} from '../styles'

export const fillFormStyle = (inputElem, property) => {
		property.length !== 0
			? inputElem.style = inputStyle : inputElem.style = inputValidationStyle
	}