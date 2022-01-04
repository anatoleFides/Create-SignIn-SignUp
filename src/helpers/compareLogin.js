import { loginValidation } from './loginValidation'

export const compareLogin = function (loginValidation) {
	const usersLogin = localStorage.getObject('logins')
	console.log(usersLogin)
	if (usersLogin.filter(login => login === loginValidation).length !== 0) {
		console.log('login exists')
	} else console.log('true login')
	
}