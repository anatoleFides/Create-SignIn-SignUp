import { resetInputSignIn } from './'

export const closeSignIn = (event) => {
	resetInputSignIn()
	document.getElementById("sign-in").remove()
}
