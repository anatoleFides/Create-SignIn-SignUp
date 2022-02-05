import {
	validateEmptyString,
	telephone,
	email
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { telephoneRule } from '../configs'

export const validatePhone = (value) => {
	const result = Boolean(value.match(telephoneRule))

	telephone.nextElementSibling.style = result 
		? errorMessageStyle : errorMessageActiveStyle

	validateEmptyString(telephone, value)

	email.disabled = !result
}
