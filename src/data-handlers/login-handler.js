export const loginHandler = (function () {
	let login = ''
	return function (property) {
		if (!property) return login
		login = property
	}
})()