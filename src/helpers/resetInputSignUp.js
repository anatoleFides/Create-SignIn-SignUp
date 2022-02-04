import {errorMessageStyle } from '../styles' 

import { getDefaultAvatar } from '../assets'

import {
	login,
	name,
	telephone,
	email,
	password
} from '../helpers'

export const resetInputSignUp = () => {
		const inputs = [login, name, telephone, email, password]
		inputs.forEach(input => {
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