import { usersCollection } from './usersCollection'
import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const passwordHandlerSignIn = (inputElem) => {
	const usersLoginPassword = []
	usersCollection().then(response => response
		.map(item => usersLoginPassword.push(item)))
		// 	.map(item => usersLoginPassword.push({
		// 	login: item.login,
		// 	password: item.password
		// })))
		console.log(usersLoginPassword)

	inputElem.oninput = (event) => {
		const usersPassord = usersLoginPassword.map(item => item.password)
console.log(usersPassord)
		const usersLogin = usersLoginPassword.map(item => item.login)
console.log(usersLogin)
		const usersTel = usersLoginPassword.map(item => item.telephone)
console.log(usersTel)
		const usersEmail = usersLoginPassword.map(item => item.email)
console.log(usersEmail)
		const usersAvatar = usersLoginPassword.map(item => item.avatar)
console.log(usersAvatar)




		const userPasswordIndex = usersPassord.indexOf(usersPassord
			.filter(item => item === event.target.value)[0])
		console.log(userPasswordIndex)

		window[Symbol.for('userLoginIndex')] === userPasswordIndex
			? Object.assign(inputElem.nextElementSibling, {
					style: errorMessageStyle
			}): Object.assign(inputElem.nextElementSibling, {
					style: errorMessageActiveStyle
				})

		emptiValidationStyle(inputElem, event.target)
	}
}