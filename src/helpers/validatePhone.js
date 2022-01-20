import {
	fillFormStyle,
	validateEmptyString
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validatePhone = (inputElem, value) => {
	fillFormStyle(inputElem, value)

	let phoneformat = /^\(?([0]{1}[3-9]{2})\)?[- ]?([0-9]{3})?[- ]?([0-9]{2})[- ]?([0-9]{2})$/

	if (value.match(phoneformat)) {
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

	validateEmptyString(inputElem, value)
}