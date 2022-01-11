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
	errorMessageStyle,
	errorMessageActiveStyle,
	forgotPasswordStyle,
	buttonSubmitStyle
} from '../styles'

import {
	logoImg
} from '../assets'

import {
	closeSignIn,
	loginHandlerSignIn,
	passwordHandlerSignIn,
	authorizeUser,
	createElem
} from '../helpers'

class SignIn extends HTMLElement {
	constructor () {
		super()
		// this.handlers = [loginHandlerSignIn, passwordHandlerSignIn]
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
			onclick: closeSignIn
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
			['text', 'Login', 'Login not found'],
			['password', 'Password', 'Invalid passvord']
		].map(function (item) {
			const elem__container = this.createElem(forms__body, 'div')

			const elem = Object.assign(this.createElem(elem__container, 'input'), {
				type: item[0],
				placeholder: item[1],
				style: inputStyle
			})

			const error__message = Object.assign(this.createElem(elem__container, 'p'), {
				textContent: item[2],
				style: errorMessageStyle
			})

			return elem
		}.bind(this))

		const forgot__password = Object.assign(this.createElem(container, 'a'), {
			style: forgotPasswordStyle,
			innerText: 'Forgot password?',
			href: '#'
		})

		loginHandlerSignIn(login, password)

		passwordHandlerSignIn(password)

		window[Symbol.for('listInputSignIn')] = [login, password]

		const button = Object.assign(this.createElem(container, 'button'), {
			innerText: 'Sign In',
			style: buttonSubmitStyle,
			onclick: async function (event) {
				await authorizeUser ({
					login: login.value,
					password: password.value
				})
			}
		})
	}
}

SignIn.prototype.createElem = createElem

customElements.define('sign-in', SignIn)

const elemSignIn = document.createElement('sign-in')
elemSignIn.id = 'sign-in'

export default elemSignIn