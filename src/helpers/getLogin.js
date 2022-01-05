import { endpoint } from '../assets'

export const getLogin = () => {
	const userLogins = []

	const collecLogins = async () => await (await fetch("http://localhost:3000/users")).json()

	collecLogins().then(response => {
		response.map(item => userLogins.push(item.login))
	})

	userLogins

	localStorage.setObject('logins', userLogins)
}