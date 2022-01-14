// import { usersCollection } from './usersCollection'

export const authorizeUser = async objectAutorize => {
	// const users = []
	// await usersCollection().then(response => response
	// 	.map(item => users.push(item)))

	for (const user of users) {
		if (objectAutorize.compareWith(user) === true) {
			const userAutorize = users[users.indexOf(user)]
			console.log(userAutorize)

			document.getElementById("not_avtirize").classList.remove('uzer-not_active')
			document.getElementById("avtirize").classList.add('user-active')
			document.getElementById("user-name").textContent = userAutorize.login
			document.getElementById("user-avatar").src = userAutorize.avatar

			document.getElementsByTagName('sign-in')[0].remove()
		}
	}
}