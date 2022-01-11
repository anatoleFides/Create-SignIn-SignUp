import { endpoint } from '../assets'
import { getListLogins } from './getListLogins'
import { resetInputSignUp } from './resetInputSignUp'

export const getUser = async user => {
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	if (response.status === 201) {
		getListLogins()
		resetInputSignUp()

		document.getElementsByTagName('sign-up')[0].remove()
	}
}