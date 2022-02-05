import {
	wrapperStyle,
	containerStyle,
	titleStyle,
	formsBodyStyle,
	inputStyle,
	outlineStyle,
	errorMessageStyle,
	errorMessageActiveStyle,
	forgotPasswordStyle,
	buttonDisabledStyle
} from '../styles'

import {
	loginHandler,
} from '../data-handlers'

import {
	btnClose,
	logoElem
} from '../elements'

import {
	closeSignIn,
	testLoginSignIn,
	testPassordSignIn,
	authorizeUser,
	createElem
} from '../helpers'

class SignIn extends HTMLElement {
	constructor () {
		super()
		
		const shadow = this.attachShadow({ mode: 'closed' })
		
		shadow.innerHTML = outlineStyle

		const wrapper = Object.assign(this.createElem(shadow, 'div'), {
		style: wrapperStyle
		})

		const container = Object.assign(this.createElem(wrapper, 'div'), {
			style: containerStyle
		})

		btnClose(this, container, closeSignIn)

		logoElem(this, container)

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

		login.onchange = function (event) {
			loginHandler(event.target.value)
			testLoginSignIn(event.target, loginHandler())
		}

		password.oninput = function (event) {
			testPassordSignIn(event.target, event.target.value)
		}

		const forgot__password = Object.assign(this.createElem(container, 'a'), {
			style: forgotPasswordStyle,
			innerText: 'Forgot password?',
		})

		window[Symbol.for('listInputSignIn')] = [login, password]

		window[Symbol.for('buttonSignIn')] = Object.assign(this.createElem(container, 'button'), {
			innerText: 'Sign In',
			style: buttonDisabledStyle,
			disabled: true,
			onclick: async function (event) {
				await authorizeUser({
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