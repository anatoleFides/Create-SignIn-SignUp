import { avatarHandler } from '../data-handlers'

export const authorizeUser = async objectAutorize => {
	document.getElementById("not_avtirize").classList.remove('uzer-not_active')
	document.getElementById("avtirize").classList.add('user-active')
	document.getElementById("user-name").textContent = objectAutorize.login
	document.getElementById("user-avatar").src = avatarHandler()

	document.getElementsByTagName('sign-in')[0].remove()
}