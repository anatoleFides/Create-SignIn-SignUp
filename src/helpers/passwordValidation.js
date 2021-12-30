// import { inputValidationStyle } from '../styles'
// import { inputStyle } from '../styles'

export const passwordValidation = function (inputElem) {
	inputElem.oninput = function (event) {
		// event.target.value !== "" 
		// 	? inputElem.style = inputStyle : inputElem.style = inputValidationStyle
			
		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
			return true
		} else { 
			event.target.style.color = '#090'
			return false
		}
	}
}