import {
	fillFormStyle,
	validateEmptyString
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateEmail = (inputElem, value) => {
	fillFormStyle(inputElem, value)

	let emailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

		if (value.match(emailformat)) {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageStyle
			})

			return true
		} else {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageActiveStyle
			})

			return false
		}

	validateEmptyString(inputElem, value)
}
