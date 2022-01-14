import { apiHost } from '../configs'
import { errorMessageActiveStyle } from '../styles'

export const testLoginSignUp = async (inputElem, login) => {
		const response = await (await fetch(`${apiHost}/user/${login}`)).json()
		
		console.log(login)

		console.log(response)
	return response.error 
		? Object.assign(inputElem.nextElementSibling, {
			textContent: 'Invalid login format'
			}) : Object.assign(inputElem.nextElementSibling, {
					textContent: 'login exists',
					style: errorMessageActiveStyle
				})
}