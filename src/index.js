import { getListLogins } from './helpers'

import loginForm from './components/sign-in'

import registrationForm from './components/sign-up'

window.onload = function (event) {
	getListLogins()
}

const forms = [loginForm, registrationForm]

const [sinInButton, sinUpButton] = ["sing-in__btn", "sing-up__btn"]
	.map((id, index) => Object.assign(document.getElementById(id), {
		onclick: function (event) {
			document.body.appendChild(forms[index])
		}
}))

