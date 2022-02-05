import { validateEmptyString } from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { emailRule } from '../configs'

export const validateEmail = (inputElem, value) => {
		if (value.match(emailRule)) {
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
