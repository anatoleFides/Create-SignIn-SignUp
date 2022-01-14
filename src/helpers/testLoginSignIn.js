import { apiHost } from '../configs'

export const testLoginSignIn = async (login) => {
	console.log(login)
	const response = await (await fetch(`${apiHost}/user/${login}`)).json()
	console.log(response)
	return response.error ? null : response
}