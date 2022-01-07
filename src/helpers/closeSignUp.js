import { resetInputSignUp } from './resetInputSignUp'

export const closeSignUp = function (event) {
	resetInputSignUp()
	document.getElementById("sign-up").remove()
}