export const emailValidation = function(elem) {
	let mailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	if (!elem.value.match(mailformat)) {
		window[Symbol.for('error__message')].innerText = 'Invalid file type'
	}
}