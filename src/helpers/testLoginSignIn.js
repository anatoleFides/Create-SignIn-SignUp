import { apiHost } from '../configs'

import { passwordHandler, avatarHandler } from '../data-handlers'

export const testLoginSignIn = async (inputElem, login) => {
	const response = await (await fetch(`${apiHost}/user/${login}`)).json()
	console.log(response)
	console.log(response.password)
	passwordHandler(response.password)

	avatarHandler(response.avatar)

	return response.error ? null : response
}