import { errorMessageActiveStyle } from '../styles'

export const compareLogin = (inputElem, loginValue) => {
	// const usersLogin = localStorage.getObject('logins')
	const usersLogin = JSON.parse(localStorage.logins)

	if (usersLogin.filter(login => login === loginValue).length !== 0) {
		Object.assign(inputElem.nextElementSibling, {
			textContent: 'login exists',
			style: errorMessageActiveStyle
		})
	} else {
		inputElem.nextElementSibling.textContent = 'Invalid login format'
	}
}