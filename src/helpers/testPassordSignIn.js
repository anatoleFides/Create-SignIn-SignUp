import { apiHost } from '../configs'

// import { loginHandler } from '../data-handlers'

import {
	errorMessageStyle,
	errorMessageActiveStyle,
	buttonDisabledStyle,
	buttonSubmitStyle
} from '../styles'

export const testPassordSignIn = async (inputElem, property, id) => {

console.log(id)
		const response = await (await fetch(`${apiHost}/user/${id}`)).json()

console.log(response)
		console.log(response.password)
		console.log(property)

		if (response.password === property) {
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