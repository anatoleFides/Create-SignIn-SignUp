import { getDefaultAvatar } from '../assets'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const readFile = (value) => {
	if (value.files[0].type.indexOf('image')) {
		Object.assign(window[Symbol.for('error__message-avatar')], {
			style: errorMessageActiveStyle,
			textContent: 'Invalid file type'
		})

		return false
	} else {
		window[Symbol.for('error__message-avatar')].style = errorMessageStyle
		
		if (value.files[0].size > 300000) {
			Object.assign(window[Symbol.for('error__message-avatar')], {
				style: errorMessageActiveStyle,
				textContent: 'Image size exceeds 300 kB'
			})

		return false
		}
		const reader = new FileReader
		reader.onload = function (ev) {
			window[Symbol.for('photo')].src = ev.target.result
		}
		reader.readAsDataURL(value.files[0])

		return true
	}
}