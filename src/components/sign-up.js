
import {
	wrapperStyle,
	containerStyle,
	buttonCloseStyle,
	logoStyle,
	logoLinkStyle,
	imageStyle,
	titleStyle,
	formsBodyStyle,
	inputValidationStyle,
	avatarContainerStyle,
	avatarStyle,
	avatarBodyStyle,
	errorMessageStyle,
	errorMessageActiveStyle,
	buttonSubmitStyle
} from '../styles'

import {
	logoImg,
	getDefaultAvatar
} from '../assets'

import {
	closeSignUp,
	valueValidation,
	loginValidation,
	phoneValidation,
	emailValidation,
	passwordValidation,
	readFile,
	getUser,
	createElem
} from '../helpers'

class SignUp extends HTMLElement {
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
			innerText: 'Sign up to Fantasy World',
			style: titleStyle
		})

		const forms__body = Object.assign(this.createElem(container, 'div'), {
			style: formsBodyStyle
		})
		const elems__body = Object.assign(this.createElem(forms__body, 'div'), {
			style: `
				margin: 0 0 2px 0;
			`
		})

		const [login, telephone, email, password] = [
			['text', 'Login', 'Invalid login format', 'login'],
			['tel', '+38(___)___-__-__', 'Invalid telephone format', 'telephone'],
			['email', 'e-mail', 'Invalid e-mail format', 'email'],
			['password', 'Password', 'Invalid password format', 'password']
		].map(function (item) {
			const elem__container = this.createElem(elems__body, 'div')

			const elem = Object.assign(this.createElem(elem__container, 'input'), {
				type: item[0],
				placeholder: item[1],
				style: inputValidationStyle
			})

			const error__message = Object.assign(this.createElem(elem__container, 'p'), {
				innerText: item[2],
				id: item[3],
				style: errorMessageStyle
			})

			return elem
		}.bind(this))

		// login.p.login = window[Symbol.for('error__message-login')]
		window[Symbol.for('error__message-login')] = document.getElementById("login")

		// [
		// 	window[Symbol.for('error__message-login')],
		// 	window[Symbol.for('error__message-telephone')],
		// 	window[Symbol.for('error__message-email')],
		// 	window[Symbol.for('error__message-password')]
		// ] = [
		// 	'Invalid login format',
		// 	'Invalid telephone format',
		// 	'Invalid e-mail format',
		// 	'Invalid password format'
		// ].forEach(function (item) {
		// 	const error__message = Object.assign(this.createElem(elem__container, 'p'), {
		// 		innerText: item[0],
		// 		style: errorMessageStyle
		// 	})
		// }.bind(this))

		loginValidation(login)

		phoneValidation(telephone)

		emailValidation(email)

		passwordValidation(password)

		const avatar__container = Object.assign(this.createElem(forms__body, 'div'), {
			style: avatarContainerStyle
		})
		const avatar = Object.assign(this.createElem(avatar__container, 'input'), {
			type: 'file',
			style: avatarStyle
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

		readFile(avatar)

		const button = Object.assign(this.createElem(container, 'button'), {
			innerText: 'Sign Up',
			style: buttonSubmitStyle,
			onclick: async function (event) {
				await getUser ({
					login: login.value,
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

