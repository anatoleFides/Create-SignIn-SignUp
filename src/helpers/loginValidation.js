import { valueValidation } from './valueValidation'
// import { compareLogin } from './compareLogin'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const loginValidation = function(inputElem) {
	inputElem.oninput = function(event) {
		valueValidation(inputElem, event.target)

		let letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/
		if (!event.target.value.match(letters)) {
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		} else {
			inputElem.nextElementSibling.style = errorMessageStyle
		}

		// compareLogin(event.target)
	}
}