import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'
import { valueValidation } from './valueValidation'
// import { errorMessage } from '../styles'
// import { createElem } from 'helpers'

export const loginValidation = function(inputElem) {

	// const loginErrorMessage = Object.assign(createElem(window[Symbol.for('elem__container')], 'p'), {
	// 	style: errorMessage
	// })

	valueValidation(inputElem)

	inputElem.oninput = function(event) {
		// event.target.value !== "" 
		// 	? inputElem.style = inputStyle : inputElem.style = inputValidationStyle

		let letters = /^[A-Za-z]+$/
		if (event.target.value.match(letters)) {
			console.log('Login true')

			// const loginErrorMessage = Object.assign(createElem(window[Symbol.for('elem__container')], 'p'), {
			// 	style: errorMessage
			// })

			// loginErrorMessage.innerText = 'Invalid login format'
		} else {
			console.log('Invalid login format')
			// inputElem.focus()
		}
		// if (event.target.value.match(letters) || event.target.value === '') {
		// 	console.log('Invalid login format')
		// 	loginErrorMessage.innerText = ''
		// }
	}
}