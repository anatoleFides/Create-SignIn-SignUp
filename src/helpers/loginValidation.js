import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'
import { errorMessage } from '../styles'
// import { createElem } from 'helpers'

export const loginValidation = function(inputElem) {

	// const loginErrorMessage = Object.assign(createElem(window[Symbol.for('elem__container')], 'p'), {
	// 	style: errorMessage
	// })

	inputElem.oninput = function(event) {
		// event.target.value !== "" 
		// 	? inputElem.style = inputStyle : inputElem.style = inputValidationStyle

		let letters = /^[A-Za-z]+$/
		if (event.target.value.match(letters)) {
			console.log('Login true')
			return true

			// const loginErrorMessage = Object.assign(createElem(window[Symbol.for('elem__container')], 'p'), {
			// 	style: errorMessage
			// })

			// loginErrorMessage.innerText = 'Invalid login format'
		} else {
			console.log('Invalid login format')
			alert('Invalid login format')
			inputElem.focus()
		}
		// if (event.target.value.match(letters) || event.target.value === '') {
		// 	console.log('Invalid login format')
		// 	loginErrorMessage.innerText = ''
		// }
	}
}