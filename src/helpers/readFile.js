import { getDefaultAvatar } from '../assets'
import { createElem } from '../helpers'

// export const readFile = function (event) {
// 	console.log(this.files[0].type, !this.files[0].type.indexOf('image'))
// 	if(this.files[0].type.indexOf('image')) return

// 	const reader = new FileReader
// 	reader.onload = function (ev) {
// 		console.log(getDefaultAvatar())
// 		window[Symbol.for('photo')].src = ev.target.result
// 	}
// 	reader.readAsDataURL(event.target.files[0])
// }

export const readFile = function (elem) {
	elem.onchange = function (event) {
		console.log(event.target.files[0].type, !event.target.files[0].type.indexOf('image'))
		if(!event.target.files[0].type.indexOf('image')) {
			const message = document.getElementById("avatar")
			Object.assign(this.createElem(message, 'p'), {
				style: `
					position: absolute;
					top: 50%: 
					right: 0;
					color: #f00;
					border: 1px solid #f00;
					padding: 4px 8px;
				`,
				innerText: 'type does not match image'
			})
		} else return
		// event.target.files[0].type.indexOf('image') ? return : alert('type does not match image')
		// 	Object.assign(this.createElem(avatar__body, 'p'), {
		// 	style: `
		// 		position: absolute;
		// 		top: 50%: 
		// 		right: 0;
		// 		color: #f00;
		// 		border: 1px solid #f00;
		// 		padding: 4px 8px;
		// 	`,
		// 	innerText: 'type does not match image'
		// })

		const reader = new FileReader
		reader.onload = function (ev) {
			console.log(getDefaultAvatar())
			window[Symbol.for('photo')].src = ev.target.result
		}
		reader.readAsDataURL(event.target.files[0])
	}
}