import { endpoint } from '../assets'

export const getListLogins = function () {
	const collecLogins = async () => await (await fetch("http://localhost:3000/users")).json()

	collecLogins().then(response => {
		localStorage.setObject('logins', response.map(item => item.login))
	})
}