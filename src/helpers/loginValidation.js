import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const loginValidation = function(inputElem) {
	inputElem.oninput = function(event) {
		event.target.value !== "" 
			? inputElem.style = inputStyle : inputElem.style = inputValidationStyle

		let letters = /^[A-Za-z]+$/
		if (!event.target.value.match(letters)) {
			console.log('Invalid login format')
		} else {
			console.log('Login true')
		}
	}
}