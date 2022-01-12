import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const loginHandlerSignIn = (logintElem, passworElem) => {
	const usersLogin = JSON.parse(localStorage.logins)

	logintElem.oninput = (event) => {
		window[Symbol.for('userLoginIndex')] = usersLogin.indexOf(usersLogin
			.filter(item => item === event.target.value)[0])

		usersLogin[window[Symbol.for('userLoginIndex')]] !== event.target.value
			? Object.assign(logintElem.nextElementSibling, {
					style: errorMessageActiveStyle
				}) : Object.assign(logintElem.nextElementSibling, {
					style: errorMessageStyle
				})

		emptiValidationStyle(logintElem, event.target)

		window[Symbol.for('userLoginIndex')] === window[Symbol.for('userPasswordIndex')]
			? Object.assign(passworElem.nextElementSibling, {
				style: errorMessageStyle
			}) : Object.assign(passworElem.nextElementSibling, {
				style: errorMessageActiveStyle
			})
	}
}