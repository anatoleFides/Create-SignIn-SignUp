import {
	fillFormStyle,
	validateEmptyString,
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateName = (inputElem, value) => {

	let letters = /^[A-Za-z]{2,10}$/

	if (value.match(letters)) {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		})

		return true
	} else {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})

		return false
	}
		fillFormStyle(inputElem, value)

	validateEmptyString(inputElem, value)
}