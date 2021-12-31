import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'
import { valueValidation } from './valueValidation'
// import { errorMessage } from '../styles'
// import { createElem } from 'helpers'

export const loginValidation = function(inputElem) {
	// const loginErrorMessage = Object.assign(createElem(window[Symbol.for('elem__container')], 'p'), {
	// 	style: errorMessage
	// })
	inputElem.oninput = function(event) {
		valueValidation(event.target)

		let letters = /^[A-Za-z]+$/
		if (event.target.value.match(letters)) {
			console.log('Login true')
		} else {
			console.log('Invalid login format')
		}
	}
}