import { endpoint } from '../assets'
import { getLogin } from './getLogin'

export const getUser = async user => {
	const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			if (response.status === 201) {
				getLogin()
				document.getElementsByTagName('sign-up')[0].remove()
			}
}