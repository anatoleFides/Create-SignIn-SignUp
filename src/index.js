import { getListLogins, openCloseBurgerMenu } from './helpers'

import loginForm from './components/sign-in'

import registrationForm from './components/sign-up'

import { getDefaultAvatar } from './assers'

openCloseBurgerMenu()

const forms = [loginForm, registrationForm]

const [sinInButton, sinUpButton] = ["sing-in__btn", "sing-up__btn"]
	.map((id, index) => Object.assign(document.getElementById(id), {
		onclick: function (event) {
			event.preventDefault()
			document.body.appendChild(forms[index])
		}
}))

// document.getElementById("exit").onclick = (event) => {
// 	document.getElementById("authorize").classList.remove('user-active')
// 	document.getElementById("not_authorize").classList.add('uzer-not_active')
// 	document.getElementById("user-name").textContent = 'User name'
// 	document.getElementById("user-avatar").src = getDefaultAvatar()


// }
