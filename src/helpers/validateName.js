import {
	fillFormStyle,
	validateEmptyString,
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateName = (inputElem, value) => {
	fillFormStyle(inputElem, value)

	let letters = /^[A-Za-z]{0,12}$/
	value.match(letters) ? Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		}) : Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})

	validateEmptyString(inputElem, value)
}