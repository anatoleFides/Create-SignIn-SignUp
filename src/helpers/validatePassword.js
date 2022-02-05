import {
	validateEmptyString,
	password
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { passwordRule } from '../configs'

import { avatar } from '../elements'

export const validatePassword = (value) => {
	const result = Boolean(value.match(passwordRule))

	password.style.color = result ? '#090' : '#f00'

	password.nextElementSibling.style = result 
		? errorMessageStyle : errorMessageActiveStyle

	validateEmptyString(password, value)

	avatar.disabled = !result
}
