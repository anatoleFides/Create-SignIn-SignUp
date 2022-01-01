import { valueValidation } from './valueValidation'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

// import { createElem } from 'helpers'

export const loginValidation = function(inputElem) {
	// const loginErrorMessage = Object.assign(createElem(window[Symbol.for('elem__container')], 'p'), {
	// 	style: errorMessage
	// })

	inputElem.oninput = function(event) {
		valueValidation(inputElem, event.target)

		let letters = /^[A-Za-z]+$/
		if (!event.target.value.match(letters)) {
			console.log('Invalid login format')
			window[Symbol.for('error__message-login')].style = errorMessageActiveStyle
		} else {
			console.log('Login true')
			window[Symbol.for('error__message-login')].style = errorMessageStyle
		}
	}
}