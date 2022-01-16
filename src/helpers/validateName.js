import {
	fillFormStyle,
	validateEmptyString,
} from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validateName = (inputElem, value) => {
	fillFormStyle(inputElem, value)

	let letters = /^[A-Za-z]{2,10}$/

	// value.match(letters) ? Object.assign(inputElem.nextElementSibling, {
	// 		style: errorMessageStyle
	// 	}) : Object.assign(inputElem.nextElementSibling, {
	// 		style: errorMessageActiveStyle
	// 	})

		if (value.match(letters)) {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageStyle
			})
			return console.log(true)
		} else Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})

	validateEmptyString(inputElem, value)
}