import {
	validateEmptyString,
	email,
	password
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { emailRule } from '../configs'

export const validateEmail = (value) => {
	const result = Boolean(value.match(emailRule))

	email.nextElementSibling.style = result 
		? errorMessageStyle : errorMessageActiveStyle

	validateEmptyString(email, value)

	password.disabled = !result
}
