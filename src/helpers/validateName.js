import { validateEmptyString } from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles' 

import { nameRule } from '../configs'

export const validateName = (inputElem, value) => {
	if (value.match(nameRule)) {
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