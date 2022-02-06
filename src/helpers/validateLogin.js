import {
	setErrorMessage,
	validateEmptyString,
	testLoginSignUp,
	login,
	name
} from './'

import { loginRule } from '../configs'

export const validateLogin = (value) => {
	const result = Boolean(value.match(loginRule))

	setErrorMessage(login, result)

	testLoginSignUp(login, value)

	validateEmptyString(login, value)

	name.disabled = !result
}
