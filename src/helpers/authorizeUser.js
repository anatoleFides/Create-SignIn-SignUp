import { usersCollection } from './usersCollection'

export const authorizeUser = async objectAutorize => {
	const users = []
	usersCollection().then(response => response
		.map(item => users.push(item)))
	// console.log(users)
	console.log(objectAutorize)
	// console.log (users.forEach(user => user))

	// console.log (objectAutorize.compareWith(users.forEach(user => user)))

	for (let user of users) {
		// if (objectAutorize.compareWith(user) === true) {
		// 	console.log('WOW')
		// }
		console.log(objectAutorize.compareWith(user))
	}

	// if ((users.forEach(user => user.compareWith(objectAutorize))) === true) {
	// 	console.log('WOW')
	// } else console.log('fuck')
}