import { usersCollection } from './usersCollection'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const passwordHandlerSignIn = function (loginElem, passwordElem) {
	// const usersPassword = []
	// usersCollection().then(response => response.map(item => usersPassword.push(item.password)))
	// console.log(usersPassword)

	const usersLoginPassword = []
	usersCollection().then(response => response
		.map(item => usersLoginPassword.push({
			login: item.login,
			password: item.password
		})))
	
	// console.log(usersLoginPassword)

	loginElem.oninput = (event) => {
		const usersLogin = usersLoginPassword.map(item => item.login)
		// console.log(usersLoginPassword.map(item => item.login))

		const userLoginIndex = usersLogin.indexOf(usersLogin
			.filter(item => item === event.target.value)[0])
		console.log(userLoginIndex)

		if (usersLogin[userLoginIndex] === event.target.value) {
			loginElem.nextElementSibling.style = errorMessageStyle
		} else {
			loginElem.nextElementSibling.style = errorMessageActiveStyle
		}

		// if (userLoginIndex !== userPasswordIndex && event.target.value === '') {
		// 	passwordElem.nextElementSibling.style = errorMessageActiveStyle
		// }

		if (event.target.value === '') {
			loginElem.nextElementSibling.style = errorMessageStyle
		}

		passwordElem.oninput = (event) => {
			const usersPassord = usersLoginPassword.map(item => item.password)
			console.log(usersPassord)

			const userPasswordIndex = usersPassord.indexOf(usersPassord
				.filter(item => item === event.target.value)[0])
			console.log(userPasswordIndex)

			if (userLoginIndex === userPasswordIndex) {
				Object.assign(passwordElem.nextElementSibling, {
					style: errorMessageStyle
				})
			} else {
				passwordElem.nextElementSibling.style = errorMessageActiveStyle
			}

			if (event.target.value === '') {
				passwordElem.nextElementSibling.style = errorMessageStyle
			}
		}
	}
}