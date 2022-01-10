import { getListLogins } from './helpers'

import loginForm from './components/sign-in'

import registrationForm from './components/sign-up'

window.onload = function (event) {
	getListLogins()
}

// const openSearch = document.querySelector('search-form__icon')
// openSearch.onclick = (event) => {
// 	event.target.classList.toggle('active')
// }

// const openBurger = document.getElementById("icon-menu")
// openBurger.onclick = (event) => {
// 	event.target.classList.toggle('open')
// 	open () => {
// 		document.getElementById("header-menu").classList.toggle('open')
// 	}
// }

const forms = [loginForm, registrationForm]

const [sinInButton, sinUpButton] = ["sing-in__btn", "sing-up__btn"]
	.map((id, index) => Object.assign(document.getElementById(id), {
		onclick: function (event) {
			document.body.appendChild(forms[index])
		}
}))

