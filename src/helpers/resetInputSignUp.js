import {
	inputValidationStyle,
	errorMessageStyle
} from '../styles'
import { getDefaultAvatar } from '../assets'

export const resetInputSignUp = () => {
		window[Symbol.for('listInput')].forEach(input => {
		Object.assign(input, {
			value: '',
			style: inputValidationStyle
		})
		input.nextElementSibling.style = errorMessageStyle
	})

	window[Symbol.for('photo')].src = getDefaultAvatar()
	window[Symbol.for('error__message-avatar')].style = errorMessageStyle
}