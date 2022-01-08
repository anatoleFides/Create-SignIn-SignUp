import { valueValidation } from './valueValidation'
import { emptiValidationStyle } from './emptiValidationStyle'
import { compareLogin } from './compareLogin'
import { getListLogins } from './getListLogins'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const loginValidationSignUp = (inputElem) => {
	inputElem.oninput = function(event) {
		valueValidation(inputElem, event.target)

		let letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/
		if (!event.target.value.match(letters)) {
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		} else {
			inputElem.nextElementSibling.style = errorMessageStyle
		}

		compareLogin(inputElem, inputElem.value)

		emptiValidationStyle(inputElem, event.target)
	}
	// return let validLogin = true
	// console.log(validLogin)
}