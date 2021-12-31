import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const valueValidation = function (inputElem) {
	if (inputElem.value.length === 0) {
		// alert("User Id should not be empty")
		inputElem.style = inputValidationStyle
		inputElem.focus() 
		return false
	}
	inputElem.oninput = function (event) {
		event.target.value.length !== 0 
			? inputElem.style = inputStyle : inputElem = inputValidationStyle
	}

	return true
}