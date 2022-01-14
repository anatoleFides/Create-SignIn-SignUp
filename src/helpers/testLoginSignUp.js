import { apiHost } from '../configs'
import { errorMessageActiveStyle } from '../styles'

export const testLoginSignUp = async (inputElem, login) => {
		const response = await (await fetch(`${apiHost}/user/${login}`)).json()
		
		console.log(login)

// 		response.status === 200
// 			? Object.assign(inputElem.nextElementSibling, {
// 				textContent: 'login exists',
// 				style: errorMessageActiveStyle
// 			}) : Object.assign(inputElem.nextElementSibling, {
// 				textContent: 'Invalid login format'
// 		})
// console.log(response.status)
			console.log(response)
	// return response.error ? null : response
	return response.error 
		? Object.assign(inputElem.nextElementSibling, {
			textContent: 'Invalid login format'
		}) : Object.assign(inputElem.nextElementSibling, {
				textContent: 'login exists',
				style: errorMessageActiveStyle
			})
}