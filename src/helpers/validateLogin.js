import {
	fillFormStyle,
	validateEmptyString,
	testLoginSignUp
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateLogin = (inputElem, value) => {
	fillFormStyle(inputElem, value)

	let letters = /^[a-zA-z]{1}[a-zA-Z1-9]{3,12}$/

	!value.match(letters) ? Object.assign(inputElem.nextElementSibling, {
		style: errorMessageActiveStyle
	}) : Object.assign(inputElem.nextElementSibling, {
		style: errorMessageStyle
		})

	testLoginSignUp(inputElem, value)

	validateEmptyString(inputElem, value)
}

