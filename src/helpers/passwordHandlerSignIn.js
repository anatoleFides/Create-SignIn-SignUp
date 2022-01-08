import { usersCollection } from './usersCollection'
import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const passwordHandlerSignIn = function (inputElem) {
	const usersLoginPassword = []
	usersCollection().then(response => response
		.map(item => usersLoginPassword.push({
			login: item.login,
			password: item.password
		})))
	
	inputElem.oninput = (event) => {
		const usersPassord = usersLoginPassword.map(item => item.password)

		const userPasswordIndex = usersPassord.indexOf(usersPassord
			.filter(item => item === event.target.value)[0])
		console.log(userPasswordIndex)

		if (window[Symbol.for('userLoginIndex')] === userPasswordIndex) {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageStyle
			})
		} else {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageActiveStyle
			})
		}

		emptiValidationStyle(inputElem, event.target)
	}
}