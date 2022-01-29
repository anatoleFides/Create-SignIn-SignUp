import {
	validateEmptyString,
	testLoginSignUp
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateLogin = (inputElem, value) => {

	let letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,12}$/

	if (value.match(letters)) {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		})

		testLoginSignUp(inputElem, value)
		
		return true
	} else {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})
	}

	validateEmptyString(inputElem, value)
}

