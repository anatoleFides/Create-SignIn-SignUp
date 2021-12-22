import { getDefaultAvatar } from '../assets'

export const readFile = function (event) {
	console.log(this.files[0].type, !this.files[0].type.indexOf('image'))
	if(this.files[0].type.indexOf('image')) return

	const reader = new FileReader
	reader.onload = function (ev) {
		console.log(getDefaultAvatar())
		window[Symbol.for('photo')].src = ev.target.result
	}
	reader.readAsDataURL(event.target.files[0])
}