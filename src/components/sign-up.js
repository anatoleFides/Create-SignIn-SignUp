
import {
	wrapperStyle,
	containerStyle,
	titleStyle,
	formsBodyStyle,
	outlineStyle,
	errorMessageStyle,
	errorMessageActiveStyle,
	buttonSubmitStyle,
	buttonDisabledStyle
} from '../styles'

import {
	btnClose,
	logoElem,
	avatarElem,
	avatar
} from '../elements'

import {
	closeSignUp,
	valueValidation,
	validateLogin,
	validateName,
	validatePhone,
	validateEmail,
	validatePassword,
	readFile,
	createElem,
	createUser,
	getInputs,
	login,
	name,
	telephone,
	email,
	password
} from '../helpers'

class SignUp extends HTMLElement {
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

		btnClose(this, container, closeSignUp)

		logoElem(this, container)

		const title = Object.assign(this.createElem(container, 'h2'), {
			innerText: 'Sign up to Fantasy World',
			style: titleStyle
		})

		const forms__body = Object.assign(this.createElem(container, 'div'), {
			style: formsBodyStyle
		})
		const elems__body = Object.assign(this.createElem(forms__body, 'div'), {
		})

		getInputs(this, elems__body)

		avatarElem(this, forms__body)

		window[Symbol.for('error__message-avatar')] = Object.assign(this.createElem(forms__body, 'p'), {
			style: errorMessageStyle,
			innerText: 'Invalid file type'
		})

		login.onchange = (event) => {
			validateLogin(event.target, event.target.value) === true
				? Object.assign(name, { disabled: false }) 
					: null
		}

		name.oninput = (event) => {
			validateName(event.target, event.target.value) === true
				? Object.assign(telephone, { disabled: false }) 
					: null
			}

		telephone.oninput = (event) => {
			validatePhone(event.target, event.target.value) === true
				? Object.assign(email, { disabled: false }) 
					: null
		}

		email.oninput = (event) => {
			validateEmail(event.target, event.target.value) === true
				? Object.assign(password, { disabled: false }) 
					: null
		}

		password.oninput = (event) => {
			validatePassword(event.target, event.target.value) === true
				? Object.assign(avatar, { disabled: false }) 
					: null
		}

		avatar.onchange = (event) => {
			readFile(event.target) === true 
				? Object.assign(button, {
						disabled: false,
						style: buttonSubmitStyle
					}) : Object.assign(button, {
							disabled: true,
							style: buttonDisabledStyle
						})
		}

		const button = Object.assign(this.createElem(container, 'button'), {
			disabled: true,
			innerText: 'Sign Up',
			style: buttonDisabledStyle,
			onclick: async function (event) {
				await createUser (login.value, {
					name: name.value,
					telephone: telephone.value,
					email: email.value,
					password: password.value,
					avatar: window[Symbol.for('photo')].src
				})
			}
		})
	}
}

SignUp.prototype.createElem = createElem

customElements.define('sign-up', SignUp)

const elemSignUp = document.createElement('sign-up')
elemSignUp.id = 'sign-up'

export default elemSignUp

