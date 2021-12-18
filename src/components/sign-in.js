import {
	wrapperStyle,
	containerStyle,
	buttonCloseStyle,
	logoStyle,
	logoLinkStyle,
	imageStyle,
	titleStyle,
	formsBodyStyle,
	inputStyle,
	buttonSubmitStyle
} from '../styles'

import {
	logoImg
} from '../assets'

import {
	closeSignIn,
	// getUser,
	createElem
} from '../helpers'

class SignIn extends HTMLElement {
	constructor () {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		
		const wrapper = Object.assign(this.createElem(shadow, 'div'), {
		style: wrapperStyle
		})

		const container = Object.assign(this.createElem(wrapper, 'div'), {
			style: containerStyle
		})

		const close = Object.assign(this.createElem(container, 'div'), {
			innerText: 'x',
			style: buttonCloseStyle,
			onclick: closeSignUp
		})

		const logo = Object.assign(this.createElem(container, 'div'), {
			style: logoStyle
		})
		const logo__link = Object.assign(this.createElem(logo, 'a'), {
			style: logoLinkStyle
		})
		const logo__img = Object.assign(this.createElem(logo__link, 'img'), {
			src: logoImg,
			style: imageStyle
		})

		const title = Object.assign(this.createElem(container, 'h2'), {
			innerText: 'Sign in to Fantasy World',
			style: titleStyle
		})

		const forms__body = Object.assign(this.createElem(container, 'div'), {
			style: formsBodyStyle
		})
		const [login, password] = [
			['text', 'Login'],
			['password', 'Password']
		].map(function (item) {
			const elem = Object.assign(this.createElem(forms__body, 'input'), {
				type: item[0],
				placeholder: item[1],
				style: inputStyle
			})

			return elem
		}.bind(this))

		const button = Object.assign(this.createElem(container, 'button'), {
			innerText: 'submit',
			style: buttonSubmitStyle
			// onclick: async function (event) {
			// 	await getUser ({
			// 		login: login.value,
			// 		telephone: telephone.value,
			// 		email: email.value,
			// 		password: password.value,
			// 		avatat: avatar__photo.src
			// 	})
			// }
		})
	}
}

SignIn.prototype.createElem = createElem

customElements.define('sign-in', SignIn)

const elemSignIn = document.createElement('sign-in')
elemSignIn.id = 'sign-in'

export default elemSignIn