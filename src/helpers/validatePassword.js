import {
	fillFormStyle,
	validateEmptyString
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validatePassword = (inputElem, value) => {
	fillFormStyle(inputElem, value)

	if (value.length < 8) {
		inputElem.style.color = '#f00'
		inputElem.nextElementSibling.style = errorMessageActiveStyle

		return false
	} else { 
		inputElem.style.color = '#090'
		inputElem.nextElementSibling.style = errorMessageStyle

		return true
	}

	validateEmptyString(inputElem, value)
}