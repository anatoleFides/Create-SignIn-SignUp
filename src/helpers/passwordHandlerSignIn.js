import { usersCollection } from './usersCollection'
import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const passwordHandlerSignIn = (inputElem) => {
	const users = []
	usersCollection().then(response => response
		.map(item => users.push(item)))

	inputElem.oninput = (event) => {
		const usersPassord = users.map(item => item.password)

		window[Symbol.for('userPasswordIndex')] = usersPassord.indexOf(usersPassord
			.filter(item => item === event.target.value)[0])

		window[Symbol.for('userLoginIndex')] === window[Symbol.for('userPasswordIndex')]
			? Object.assign(inputElem.nextElementSibling, {
					style: errorMessageStyle
			}): Object.assign(inputElem.nextElementSibling, {
					style: errorMessageActiveStyle
				})

		emptiValidationStyle(inputElem, event.target)
	}
}