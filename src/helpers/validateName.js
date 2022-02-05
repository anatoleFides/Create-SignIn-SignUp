import {
	validateEmptyString,
	name,
	telephone
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { nameRule } from '../configs'

export const validateName = (value) => {
	const result = Boolean(value.match(nameRule))

	name.nextElementSibling.style = result 
		? errorMessageStyle : errorMessageActiveStyle

	validateEmptyString(name, value)

	telephone.disabled = !result
}
