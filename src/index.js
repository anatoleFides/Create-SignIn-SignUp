import { openCloseBurgerMenu, signOut } from './helpers'

import loginForm from './components/sign-in'

import registrationForm from './components/sign-up'

document.getElementById("burger-menu").onclick = (event) => {
	openCloseBurgerMenu(event.target)
}

const forms = [loginForm, registrationForm]

const [sinInButton, sinUpButton] = ["sing-in__btn", "sing-up__btn"]
	.map((id, index) => Object.assign(document.getElementById(id), {
		onclick: function (event) {
			event.preventDefault()
			document.body.appendChild(forms[index])
		}
}))

document.getElementById("exit").onclick = (event) => {
	signOut(event.target)
}

