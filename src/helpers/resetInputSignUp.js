import {errorMessageStyle } from '../styles' 

import { getDefaultAvatar } from '../assets'

export const resetInputSignUp = () => {
		window[Symbol.for('listInputSignUp')].forEach(input => {
		Object.assign(input, {
			value: ''
		})
		Object.assign(input.nextElementSibling, {
			style: errorMessageStyle
		})
	})

	window[Symbol.for('photo')].src = getDefaultAvatar()
	window[Symbol.for('error__message-avatar')].style = errorMessageStyle
}