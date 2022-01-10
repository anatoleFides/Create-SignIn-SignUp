import { usersCollection } from './usersCollection'

export const authorizeUser = (objectAutorize) => {
	const collectionUsers = []
	usersCollection().then(response => response
		.map(item => usersLoginPassword.push({
			login: item.login,
			telephone: item.telephone,
			email: item.email
			password: item.password,
			avatar: item.avatar
		})))
	console.log(usersLoginPassword)

	if (collectionUsers.forEach(user => {
		user.compareWith(objectAutorize)}) === true) {
			console.log('WOW')
	} else console.log('fuck')
}