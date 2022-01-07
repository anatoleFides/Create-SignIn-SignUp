import { usersCollection } from './usersCollection'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const passwordHandlerSignIn = function (inputElem) {
	const usersPassword = []
	usersCollection().then(response => response.map(item => usersPassword.push(item.password)))
	
	console.log(usersPassword)

	inputElem.oninput = (event) => {
		const passwordCompare = usersPassword
			.filter(password => password === event.target.value)

		if (passwordCompare.length === 0) {
			Object.assign(inputElem.nextElementSibling, {
				style: errorMessageActiveStyle
			})
			// return false
		} else {
			inputElem.nextElementSibling.style = errorMessageStyle
			// return true
		}

		if (event.target.value === '') {
			inputElem.nextElementSibling.style = errorMessageStyle
		}
	}
}