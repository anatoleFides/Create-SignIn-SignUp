import { getDefaultAvatar } from '../assets'

import {
	errorMessageStyle,
	errorMessageActiveStyle,
	// buttonSubmitStyle,
	// buttonDisabledStyle
} from '../styles'

import { avatarMessageError, button }from '../elements'

export const readFile = (value) => {
	if (value.files[0].type.indexOf('image')) {
		Object.assign(avatarMessageError, {
			style: errorMessageActiveStyle,
			textContent: 'Invalid file type'
		})

		return false
	} else {
		avatarMessageError.style = errorMessageStyle
		
		if (value.files[0].size > 300000) {
			Object.assign(avatarMessageError, {
				style: errorMessageActiveStyle,
				textContent: 'Image size exceeds 300 kB'
			})

		return false
		}
		const reader = new FileReader
		reader.onload = function (event) {
			window[Symbol.for('photo')].src = event.target.result
		}
		reader.readAsDataURL(value.files[0])

		return true
	}

	// if (value.files[0].type.indexOf('image')) {
	// 	Object.assign(avatarMessageError, {
	// 		style: errorMessageActiveStyle,
	// 		textContent: 'Invalid file type'
	// 	})

	// 	Object.assign(button, {
	// 		disabled: true,
	// 		style: buttonDisabledStyle
	// 	})
	// } else {
	// 	avatarMessageError.style = errorMessageStyle
	// 			Object.assign(button, {
	// 		disabled: false,
	// 		style: buttonSubmitStyle
	// 	})
	// }

	// if (value.files[0].size > 300000) {
	// 	Object.assign(avatarMessageError, {
	// 		style: errorMessageActiveStyle,
	// 		textContent: 'Image size exceeds 300 kB'
	// 	})

	// 	Object.assign(button, {
	// 		disabled: true,
	// 		style: buttonDisabledStyle
	// 	})
	// } else {
	// 	avatarMessageError.style = errorMessageStyle
	// 			Object.assign(button, {
	// 		disabled: false,
	// 		style: buttonSubmitStyle
	// 	})
	// }

	// const reader = new FileReader
	// 	reader.onload = function (event) {
	// 		window[Symbol.for('photo')].src = event.target.result
	// 	}
	// 	reader.readAsDataURL(value.files[0])

	// 	Object.assign(button, {
	// 		disabled: false,
	// 		style: buttonSubmitStyle
	// 	})

}
