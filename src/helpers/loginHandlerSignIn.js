import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const loginHandlerSignIn = (inputElem, passwordInput) => {
	const usersLogin = JSON.parse(localStorage.logins)

	inputElem.oninput = (event) => {
		window[Symbol.for('userLoginIndex')] = usersLogin.indexOf(usersLogin
			.filter(item => item === event.target.value)[0])
		console.log(window[Symbol.for('userLoginIndex')])

		usersLogin[window[Symbol.for('userLoginIndex')]] !== event.target.value
			? Object.assign(inputElem.nextElementSibling, {
					style: errorMessageActiveStyle
				}) : Object.assign(inputElem.nextElementSibling, {
					style: errorMessageStyle
				})

		emptiValidationStyle(inputElem, event.target)

		window[Symbol.for('userLoginIndex')] === window[Symbol.for('userPasswordIndex')]
			? Object.assign(passwordInput.nextElementSibling, {
				style: errorMessageStyle
			}) : Object.assign(passwordInput.nextElementSibling, {
				style: errorMessageActiveStyle
			})
	}
}