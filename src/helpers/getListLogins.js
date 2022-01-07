// import { endpoint } from '../assets'
import { usersCollection } from './usersCollection'

export const getListLogins = function () {
	// const collecUsers = async () => await (await fetch("http://localhost:3000/users")).json()

	usersCollection().then(response => {
		localStorage.setObject('logins', response.map(item => item.login))
	})
}