import { apiHost } from '../configs'
import { resetInputSignUp } from './resetInputSignUp'

export const getUser = async user => {
	const response = await fetch(`${apiHost}/user/${user.login}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	if (response.status === 201) {
		resetInputSignUp()

		document.getElementsByTagName('sign-up')[0].remove()
	}
}