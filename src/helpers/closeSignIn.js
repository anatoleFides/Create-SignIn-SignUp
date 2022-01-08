import { resetInputSignIn } from './resetInputSignIn'

export const closeSignIn = (event) => {
	resetInputSignIn()
	document.getElementById("sign-in").remove()
}