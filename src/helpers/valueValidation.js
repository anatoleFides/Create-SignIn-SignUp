import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const valueValidation = function (inputElem) {
	if (inputElem.value === '') {
		inputElem.style = inputValidationStyle
	} 
	// else {
	// 	inputElem.style = inputStyle
	// }

	// inputElem.value === ''
	// 	? inputElem.style = inputStyle : inputElem = inputValidationStyle

	inputElem.oninput = function (event) {
		event.target.value !== ''
			? inputElem.style = inputStyle : inputElem = inputValidationStyle
	}
}