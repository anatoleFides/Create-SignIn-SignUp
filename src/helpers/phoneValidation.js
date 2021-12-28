import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const phoneValidation = function(inputElem) {
	inputElem.oninput = function(event) {
		event.target.value !== "" 
			? inputElem.style = inputStyle : inputElem.style = inputValidationStyle
	}
}