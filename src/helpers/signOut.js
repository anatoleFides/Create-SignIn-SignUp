import { getDefaultAvatar } from '../assets'

export const signOut = () => {
	document.getElementById("authorize").classList.remove('user-active')
	document.getElementById("not_authorize").classList.add('uzer-not_active')
	document.getElementById("user-name").textContent = 'User name'
	document.getElementById("user-avatar").src = getDefaultAvatar()
}
