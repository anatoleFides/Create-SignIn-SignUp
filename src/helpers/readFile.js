import { getDefaultAvatar } from '../assets'

import {
	errorMessageStyle,
	buttonSubmitStyle,
	buttonDisabledStyle
} from '../styles'

import { avatarMessageError, button }from '../elements'

import { showError } from './'

export const readFile = (file, elem) => {
	const errorMessages = [
		'Invalid file',
		'Invalid elemHTML',
		'Invalid file type',
		'Image size exceeds 300 kB'
	]
// console.log(!file instanceof File)
// 	if (!file instanceof File) {
// 		// showError(errorMessages[0])

// 		// return Object.assign(button, {
// 		// 					disabled: true,
// 		// 					style: buttonDisabledStyle
// 		// 				})
// 		return console.log('Invalid file')
// 	}
// console.log(elem?.nodeType !== 1)
// 	if (elem?.nodeType !== 1) {
// 		// showError(errorMessages[1])

// 		// return Object.assign(button, {
// 		// 					disabled: true,
// 		// 					style: buttonDisabledStyle
// 		// 				})
// 		return console.log('Invalid elemHTML')
// 	}
console.log(file.files[0].type.indexOf('image'))
	if (file.files[0].type.indexOf('image')) {
		showError(errorMessages[2])

		return Object.assign(button, {
							disabled: true,
							style: buttonDisabledStyle
						})
	} else {
		avatarMessageError.style = errorMessageStyle
		
		if (file.files[0].size > 300000) {
			showError(errorMessages[3])

		return Object.assign(button, {
							disabled: true,
							style: buttonDisabledStyle
						})
		}
		const reader = new FileReader
		reader.onload = function (event) {
			elem.src = event.target.result
		}
		reader.readAsDataURL(file.files[0])

		return Object.assign(button, {
						disabled: false,
						style: buttonSubmitStyle
					})
	}
}
