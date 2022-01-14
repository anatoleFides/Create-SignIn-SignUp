
import { valueValidation } from './'
import { validateEmptyString } from './'
import { testLoginSignUp } from './'
// import { getListLogins } from './getListLogins'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateLogin = (inputElem) => {
	inputElem.onchange = function(event) {
		valueValidation(inputElem, event.target)

		let letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/

		!event.target.value.match(letters) ? Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		}) : Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		})

		testLoginSignUp(inputElem, event.target.value)

		validateEmptyString(inputElem, event.target)
	}
}

