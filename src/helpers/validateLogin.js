import {
	validateEmptyString,
	testLoginSignUp
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { loginRule } from '../configs'

export const validateLogin = (inputElem, value) => {
	if (value.match(loginRule)) {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		})

		testLoginSignUp(inputElem, value)
		
		return true
	} else {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})

		validateEmptyString(inputElem, value)

		return false
	}


}

