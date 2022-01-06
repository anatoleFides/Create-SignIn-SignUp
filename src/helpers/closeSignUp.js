export const closeSignUp = function (event) {
	window[Symbol.for('listInput')].forEach(input => input.value = '')
	
	document.getElementById("sign-up").remove()
}