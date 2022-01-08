import { getDefaultAvatar } from '../assets'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const readFile = (elem) => {
	elem.onchange = (event) => {
		if (event.target.files[0].type.indexOf('image')) {
			window[Symbol.for('error__message-avatar')].style = errorMessageActiveStyle
		} else {
			window[Symbol.for('error__message-avatar')].style = errorMessageStyle
			const reader = new FileReader
			reader.onload = function (ev) {
				window[Symbol.for('photo')].src = ev.target.result
			}
			reader.readAsDataURL(event.target.files[0])
		}
	}
}