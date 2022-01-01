import { valueValidation } from './valueValidation'

export const emailValidation = function(inputElem) {
	inputElem.oninput = function (event) {
		valueValidation(inputElem, event.target)

		let mailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
		if (event.target.value.match(mailformat)) {
			console.log('wow')
			// window[Symbol.for('error__message-email')].innerText = 'Invalid write e-mail'
		} else {
			console.log('Invalid write e-mail')
			// window[Symbol.for('error__message-email')].innerText = ''
		}
	}
} 
