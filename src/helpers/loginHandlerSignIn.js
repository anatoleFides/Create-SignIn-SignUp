import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const loginHandlerSignIn = function (inputElem) {
	const usersLogin = JSON.parse(localStorage.logins)

	inputElem.oninput = (event) => {
		window[Symbol.for('userLoginIndex')] = usersLogin.indexOf(usersLogin
			.filter(item => item === event.target.value)[0])
		console.log(window[Symbol.for('userLoginIndex')])

		if (usersLogin[window[Symbol.for('userLoginIndex')]] !== event.target.value) {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageActiveStyle
			})
		} else {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageStyle
			})
		}

		emptiValidationStyle(inputElem, event.target)
	}
}