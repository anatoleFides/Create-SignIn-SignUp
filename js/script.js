document.getElementById("singup-btn").onclick = function (event) {
	event.preventDefault()
	const customElemSignUp = document.getElementById("sign-up")
	console.log(customElemSignUp)
	customElemSignUp.classList.add("open-sign_up")
}