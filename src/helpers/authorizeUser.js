import { usersCollection } from './usersCollection'

export const authorizeUser = (objectAutorize) => {
	const users = []
	usersCollection().then(response => response
		.map(item => users.push({item})))
	console.log(users)

	if (users.forEach(user => {
		user.compareWith(objectAutorize)}) === true) {
			console.log('WOW')
	} else console.log('fuck')
}