import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const valueValidation = function (inputElem) {
	inputElem.value.length === 0
		? inputElem.style = inputValidationStyle : inputElem.style = inputStyle

	inputElem.oninput = function (event) {
		event.target.value.length !== 0
			? inputElem.style = inputStyle : inputElem.style = inputValidationStyle
	}
}