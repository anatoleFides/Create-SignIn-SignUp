import {validateEmptyString } from './' 

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { telephoneRule } from '../configs'

export const validatePhone = (inputElem, value) => {

	// let phoneformat = /^\(?([0]{1}[3-9]{2})\)?[- ]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/

	if (value.match(telephoneRule)) {
		Object.assign(inputElem.nextElementSibling, {
		style: errorMessageStyle
	})


	return true
	} else {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})
	
		validateEmptyString(inputElem, value)

		return false
	}
}