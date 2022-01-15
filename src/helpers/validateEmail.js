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

	// value.match(emailformat) 
	// 	? Object.assign(inputElem.nextElementSibling, {
	// 		style: errorMessageStyle
	// 	}) : Object.assign(inputElem.nextElementSibling, {
	// 		style: errorMessageActiveStyle
	// 	})

		if (value.match(emailformat)) {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageStyle
			})
			// return console.log(true)
		} else Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})

	validateEmptyString(inputElem, value)
}
