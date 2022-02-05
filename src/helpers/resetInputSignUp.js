import {errorMessageStyle } from '../styles' 

import { getDefaultAvatar } from '../assets'

import {
	login,
	name,
	telephone,
	email,
	password
} from './'

import { avatarMessageErrorElem } from '../elements'

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
	avatarMessageErrorElem.style = errorMessageStyle
}
