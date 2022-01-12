import { usersCollection } from './usersCollection'

export const authorizeUser = async objectAutorize => {
	const users = []
	await usersCollection().then(response => response
		.map(item => users.push(item)))

	for (const user of users) {
		if (objectAutorize.compareWith(user) === true) {
			const userAutorize = users[users.indexOf(user)]
			console.log(userAutorize)
		}
	}

}