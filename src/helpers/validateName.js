import {
	setErrorMessage,
	validateEmptyString,
	name,
	telephone
} from './'

import { nameRule } from '../configs'

export const validateName = (value) => {
	const result = Boolean(value.match(nameRule))

	setErrorMessage(name, result)

	validateEmptyString(name, value)

	telephone.disabled = !result
}
