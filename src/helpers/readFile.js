import { getDefaultAvatar } from '../assets'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const readFile = (value) => {
	if (value.files[0].type.indexOf('image')) {
		window[Symbol.for('error__message-avatar')].style = errorMessageActiveStyle

		return false
	} else {
		window[Symbol.for('error__message-avatar')].style = errorMessageStyle
		const reader = new FileReader
		reader.onload = function (ev) {
			window[Symbol.for('photo')].src = ev.target.result
		}
		reader.readAsDataURL(value.files[0])

		return true
	}
}