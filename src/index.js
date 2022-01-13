import { getListLogins, openCloseBurgerMenu } from './helpers'

import loginForm from './components/sign-in'

import registrationForm from './components/sign-up'

getListLogins()

openCloseBurgerMenu()

const forms = [loginForm, registrationForm]

const [sinInButton, sinUpButton] = ["sing-in__btn", "sing-up__btn"]
	.map((id, index) => Object.assign(document.getElementById(id), {
		onclick: function (event) {
			event.preventDefault()
			document.body.appendChild(forms[index])
		}
}))
