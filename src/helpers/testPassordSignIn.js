// import { apiHost } from '../configs'

import { passwordHandler } from '../data-handlers'

import {
	errorMessageStyle,
	errorMessageActiveStyle,
	buttonDisabledStyle,
	buttonSubmitStyle
} from '../styles'

export const testPassordSignIn = async (inputElem, property) => {
	if (passwordHandler() === property) {
		Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		})
		Object.assign(window[Symbol.for('buttonSignIn')], {
			disabled: false,
			style: buttonSubmitStyle
		})
	} else {
		Object.assign(inputElem.nextElementSibling, {
				style: errorMessageActiveStyle
		})
		Object.assign(window[Symbol.for('buttonSignIn')], {
			disabled: true,
			style: buttonDisabledStyle
		})
	}
}