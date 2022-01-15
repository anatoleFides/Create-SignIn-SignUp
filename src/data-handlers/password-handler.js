export const passwordHandler = (function () {
	let password = ''
	return function (property) {
		if (!property) return password
		password = property
	}
})()