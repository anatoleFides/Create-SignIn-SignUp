import {
	createElem,
	login,
	name,
	telephone,
	email,
	password,
	avatar
} from '../helpers'

import { buttonDisabledStyle } from '../styles'


let button

export const buttonElem = (webElem, container) => {
	const button = Object.assign(webElem.createElem(container, 'button'), {
		disabled: true,
		innerText: 'Sign Up',
		style: buttonDisabledStyle,
		onclick: async function (event) {
			await createUser (login.value, {
				name: name.value,
				telephone: telephone.value,
				email: email.value,
				password: password.value,
				avatar: window[Symbol.for('photo')].src
			})
		}
	})
}

export {
	button
}
