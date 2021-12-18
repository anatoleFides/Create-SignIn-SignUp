export const getClickSignIn = document.getElementById("singup-btn").onclick = function (event) {
	event.preventDefault()
	const customElemSignUp = document.getElementById("sign-in")
	console.log(customElemSignUp)
	customElemSignUp.classList.add("open-sign_in")

}