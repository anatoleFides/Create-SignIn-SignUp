export const loginHandler = (function () {
	let login = ''
	return function (properti) {
		if (!properti) return login
		login = properti
	}
})()