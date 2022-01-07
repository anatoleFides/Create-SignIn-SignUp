import { usersCollection } from './usersCollection'

export const authorizeUser = function (event) {
	const usersLoginPassord = {}
	usersCollection().then(response => {
		response.map(user => Object.assign(usersLoginPassord, {
			login: user.login,
			password: user.password
		}))
		console.log(usersLoginPassord)
	})
}