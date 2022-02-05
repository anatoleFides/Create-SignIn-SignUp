import { apiHost } from '../configs'

import { resetInputSignUp } from './'

export const createUser = async (login, user) => {
	const response = await fetch(`${apiHost}/user/${login}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})

	console.log(response.status)

	if (response.status === 200) {
		resetInputSignUp()

		document.getElementsByTagName('sign-up')[0].remove()
	}
}
