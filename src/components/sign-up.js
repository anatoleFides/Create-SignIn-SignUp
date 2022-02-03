
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
	outlineStyle,
	avatarContainerStyle,
	avatarStyle,
	avatarBodyStyle,
	errorMessageStyle,
	errorMessageActiveStyle,
	buttonSubmitStyle,
	buttonDisabledStyle
} from '../styles'

import {
	logoImg,
	getDefaultAvatar
} from '../assets'

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
	createUser
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
			innerText: 'Sign up to Fantasy World',
			style: titleStyle
		})

		const forms__body = Object.assign(this.createElem(container, 'div'), {
			style: formsBodyStyle
		})
		const elems__body = Object.assign(this.createElem(forms__body, 'div'), {
		})

		const [login, name, telephone, email, password] = [
			['text', 'Login', 'Invalid login format', false],
			['text', 'User name', 'Invalid name format', true],
			['tel', '(0XX)XXX-XX-XX', 'Invalid telephone format', true],
			['email', 'e-mail', 'Invalid e-mail format', true],
			['password', 'Password', 'Invalid password format', true]
		].map(function (item) {
			const elem__container = this.createElem(elems__body, 'div')

			const elem = Object.assign(this.createElem(elem__container, 'input'), {
				type: item[0],
				placeholder: item[1],
				style: inputStyle,
				disabled: item[3]
			})

			const error__message = Object.assign(this.createElem(elem__container, 'p'), {
				textContent: item[2],
				style: errorMessageStyle
			})

			return elem
		}.bind(this))

		const avatar__container = Object.assign(this.createElem(forms__body, 'div'), {
			style: avatarContainerStyle
		})
		const avatar = Object.assign(this.createElem(avatar__container, 'input'), {
			type: 'file',
			style: avatarStyle,
			disabled: true
		})
			
		const avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {
			style: avatarBodyStyle
		})

		window[Symbol.for('photo')] = Object.assign(this.createElem(avatar__body, 'img'), {
			src: getDefaultAvatar(),
			style: imageStyle
		})

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

// const testValidateInputs = async () => {
// 	await console.log(validateLogin(login, login.value))
// 	console.log(validateName(name, name.value))
// }

		window[Symbol.for('listInputSignUp')] = [login, name, telephone, email, password]

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

