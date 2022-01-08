import { resetInputSignUp } from './resetInputSignUp'

export const closeSignUp = (event) => {
	resetInputSignUp()
	document.getElementById("sign-up").remove()
}