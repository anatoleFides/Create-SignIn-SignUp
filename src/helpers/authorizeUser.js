// import { apiHost } from '../configs'
import { avatarHandler } from '../data-handlers'

export const authorizeUser = async objectAutorize => {
	// const response = await (await fetch(`${apiHost}/user/${objectAutorize.login}`)).json()

// console.log(objectAutorize.compareWith(response))
// 		if (objectAutorize.compareWith(response) === true) {


	document.getElementById("not_avtirize").classList.remove('uzer-not_active')
	document.getElementById("avtirize").classList.add('user-active')
	document.getElementById("user-name").textContent = objectAutorize.login
	document.getElementById("user-avatar").src = avatarHandler()

	document.getElementsByTagName('sign-in')[0].remove()
}
// }