export const passwordValidation = function (elem) {
	elem.oninput = function (event) {
		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
		} else { event.target.style.color = '#090' }
	}
}