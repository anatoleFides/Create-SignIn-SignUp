import {
	validateEmptyString,
	testLoginSignUp,
	login,
	name
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { loginRule } from '../configs'

export const validateLogin = (value) => {
	const result = Boolean(value.match(loginRule))

	login.nextElementSibling.style = result 
		? errorMessageStyle : errorMessageActiveStyle

	testLoginSignUp(login, value)

	validateEmptyString(login, value)

	name.disabled = !result
}
