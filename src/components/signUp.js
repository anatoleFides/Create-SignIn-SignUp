
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
	avatarImg
} from '../assets'

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
			style: buttonCloseStyle
		})
		close.onclick = function (event) {
			document.getElementById("sign-up")
				.classList.remove("open-sign_up")
		}

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
			['text', 'Login'],
			['tel', '+38(___)___-__-__'],
			['email', 'e-mail'],
			['password', 'Password']
		].map(function (item) {
			const elem = Object.assign(this.createElem(forms__body, 'input'), {
				type: item[0],
				placeholder: item[1],
				style: inputStyle
			})

			return elem
		}.bind(this))


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
		const avatar__photo = Object.assign(this.createElem(avatar__body, 'img'), {
			src: avatarImg,
			style: imageStyle
		})
		avatar.onchange = function (event) {
				const reader = new FileReader
				reader.onload = function (ev) {
					avatar__photo.src = ev.target.result
				}
				reader.readAsDataURL(event.target.files[0])
			}
		const button = Object.assign(this.createElem(container, 'div'), {
			innerText: 'submit',
			style: buttonSubmitStyle
		})

		button.onclick = async function (event) {
			const user = {
				login: login.value,
				telephone: telephone.value,
				email: email.value,
				password: password.value,
				avatat: avatar__photo.src
			}
			const response = await fetch('http://localhost:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			if (response.status === 201) { 
				document.getElementsByTagName('sign-up')[0].remove()
			}
		}
	}

	createElem (сontainerName, tagName) { 
		console.log(сontainerName.nodeType) 
		return сontainerName.appendChild(document.createElement(tagName)) 
	}
}


customElements.define('sign-up', SignUp)

const elemSignUp = document.createElement('sign-up')
elemSignUp.id = 'sign-up'

export default elemSignUp

