// import { loginValidation } from './loginValidation'

export const compareLogin = (inputElem, loginValue) => {
	const usersLogin = JSON.parse(localStorage.logins)
	console.log(usersLogin)
	if (usersLogin.filter(login => login === loginValue).length !== 0) {
		console.log('login exists')
		inputElem.nextElementSibling.innetText = 'login exists'
	} else console.log('true login')
}