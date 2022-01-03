import { endpoint } from '../assets'

export const getLogin = function () {
	const userLogins = []

	const collecLogins = async () => await (await fetch("http://localhost:3000/users")).json()

	collecLogins().then(response => {
		response.map(item => userLogins.push(item.login))
	})

	localStorage.setObject('logins', userLogins)
}