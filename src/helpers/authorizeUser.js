import { usersCollection } from './usersCollection'

export const authorizeUser = (event) => {
	const usersLoginPassword = []
	usersCollection().then(response => response
		.map(item => usersLoginPassword.push({
			login: item.login,
			password: item.password
		})))
	console.log(usersLoginPassword)
}