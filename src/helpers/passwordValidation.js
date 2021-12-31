import { valueValidation } from './valueValidation'

export const passwordValidation = function (inputElem) {

	valueValidation(inputElem)

	inputElem.oninput = function (event) {
		// event.target.value !== "" 
		// 	? inputElem.style = inputStyle : inputElem.style = inputValidationStyle
			
		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
		} else { 
			event.target.style.color = '#090'
		}
	}
}