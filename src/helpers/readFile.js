import { getDefaultAvatar } from '../assets'

export const readFile = function (elem) {
	elem.onchange = function (event) {
		console.log(event.target.files[0].type, !event.target.files[0].type.indexOf('image'))
		if (event.target.files[0].type.indexOf('image')) {
			console.log('Invalid type image')
			alert('Invalid type image')
		} else {
			const reader = new FileReader
			reader.onload = function (ev) {
				console.log(getDefaultAvatar())
				window[Symbol.for('photo')].src = ev.target.result
			}
			reader.readAsDataURL(event.target.files[0])
		}
	}
}