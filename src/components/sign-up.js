
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
	avatarContainerStyle,
	avatarStyle,
	avatarBodyStyle,
	buttonSubmitStyle
} from '../styles'

import {
	logoImg,
	getDefaultAvatar
} from '../assets'

import {
	closeSignUp,
	// valueValidation,
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
		const [login, telephone, email, password] = [
			['text', 'Login', 'text'],
			['tel', '+38(___)___-__-__', 'tel'],
			['email', 'e-mail', 'email'],
			['password', 'Password', 'password']
		].map(function (item) {
			const elem = Object.assign(this.createElem(forms__body, 'input'), {
				type: item[0],
				placeholder: item[1],
				style: inputStyle,
				id: item[2]
			})
			console.dir(elem)
			return elem
		}.bind(this))

		// function validate () {
		// 	const email = document.getElementById("email")
		// 	console.log(email.value.length)
		// 	if (email.value === '') {
		// 		alert('*this field is required')
		// 		// email.innerText = '*this field is required'
		// 		// return { error: '*this field is required' }
		// 	}
		// }
		// valueValidation(password)
		passwordValidation(password)

		const avatar__container = Object.assign(this.createElem(forms__body, 'div'), {
			style: avatarContainerStyle
		})
		const avatar = Object.assign(this.createElem(avatar__container, 'input'), {
			type: 'file',
			style: avatarStyle,
			id: 'avatar'
		})
			
		const avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {
			style: avatarBodyStyle
		})

		window[Symbol.for('photo')] = Object.assign(this.createElem(avatar__body, 'img'), {
			src: getDefaultAvatar(),
			style: imageStyle
		})

		avatar.onchange = readFile

		const button = Object.assign(this.createElem(container, 'button'), {
			innerText: 'Sign Up',
			style: buttonSubmitStyle,
			id: 'submitButton',
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

