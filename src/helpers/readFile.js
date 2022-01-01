import { getDefaultAvatar } from '../assets'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const readFile = function (elem) {
	elem.onchange = function (event) {
		// console.log(event.target.files[0].type, !event.target.files[0].type.indexOf('image'))
		if (event.target.files[0].type.indexOf('image')) {
			// console.log('Invalid file type')
			window[Symbol.for('error__message-avatar')].style = errorMessageActiveStyle
		} else {
			window[Symbol.for('error__message-avatar')].style = errorMessageStyle
			const reader = new FileReader
			reader.onload = function (ev) {
				// console.log(getDefaultAvatar())
				window[Symbol.for('photo')].src = ev.target.result
			}
			reader.readAsDataURL(event.target.files[0])
		}
	}
}