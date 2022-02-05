import { apiHost } from '../configs'
import { errorMessageStyle, errorMessageActiveStyle } from '../styles'

export const testLoginSignUp = async (inputElem, login) => {
	const response = await (await fetch(`${apiHost}/user/${login}`)).json()

	return response.error 
		? Object.assign(inputElem.nextElementSibling, {
			textContent: 'Invalid login format'
			}) : Object.assign(inputElem.nextElementSibling, {
					textContent: 'login exists',
					style: errorMessageActiveStyle
				})
}
