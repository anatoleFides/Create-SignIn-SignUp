import { getDefaultAvatar } from '../assets'
import { errorMessage } from '../styles'

export const readFile = function (elem) {
	elem.onchange = function (event) {
		console.log(event.target.files[0].type, !event.target.files[0].type.indexOf('image'))
		if (event.target.files[0].type.indexOf('image')) {
			console.log('Invalid type image')
			// alert('Invalid type image')
			const messageMistace = Object
				.assign(window[Symbol.for('forms__body')]
					.appendChild(document.createElement('p')), {
						innerText: 'Invalid type image',
						style: errorMessage,
						id: 'error-messge__input-file'
					})

			console.log(messageMistace)
		} else {
			// document.getElementById("error-messge__input-file").remove()
			const reader = new FileReader
			reader.onload = function (ev) {
				// console.log(getDefaultAvatar())
				window[Symbol.for('photo')].src = ev.target.result
			}
			reader.readAsDataURL(event.target.files[0])
		}
	}
}