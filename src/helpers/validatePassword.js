import {
	setErrorMessage,
	validateEmptyString,
	password
} from './'

import { passwordRule } from '../configs'

import { avatar } from '../elements'

export const validatePassword = (value) => {
	const result = Boolean(value.match(passwordRule))

	password.style.color = result ? '#090' : '#f00'

	setErrorMessage(password, result)

	validateEmptyString(password, value)

	avatar.disabled = !result
}
