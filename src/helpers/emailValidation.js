import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const emailValidation = function(inputElem) {
	inputElem.oninput = function (event) {
		event.target.value !== "" 
			? inputElem.style = inputStyle : inputElem.style = inputValidationStyle

		let mailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
		if (!event.target.value.match(mailformat)) {
			console.log('wow')
			window[Symbol.for('error__message')].innerText = 'Invalid write e-mail'
		} else {
			console.log('Invalid write e-mail')
			window[Symbol.for('error__message')].innerText = ''
		}
	}
} 
