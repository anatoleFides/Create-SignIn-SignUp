import { getDefaultAvatar } from '../assets'
import { errorMessage } from '../styles'

export const readFile = function (elem) {
	elem.onchange = function (event) {
		// console.log(event.target.files[0].type, !event.target.files[0].type.indexOf('image'))
		if (event.target.files[0].type.indexOf('image')) {
			// console.log('Invalid file type')
			window[Symbol.for('error__message')].innerText = 'Invalid file type'
		} else {
			window[Symbol.for('error__message')].innerText = ''
			const reader = new FileReader
			reader.onload = function (ev) {
				// console.log(getDefaultAvatar())
				window[Symbol.for('photo')].src = ev.target.result
			}
			reader.readAsDataURL(event.target.files[0])
		}
	}
}