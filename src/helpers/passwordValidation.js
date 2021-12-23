export const passwordValidation = function (elem) {
	// if (elem.value === '') {
	// 	document.getElementById("submitButton") = disabled
	// }
	elem.oninput = function (event) {
		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
		} else { event.target.style.color = '#090' }
	}
}