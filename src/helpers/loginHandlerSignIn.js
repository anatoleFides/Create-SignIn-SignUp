// import {
// 	errorMessageStyle,
// 	errorMessageActiveStyle
// } from '../styles'

// export const loginHandlerSignIn = function (inputElem) {
// 	const usersLogin = JSON.parse(localStorage.logins)

// 	inputElem.oninput = (event) => {
// 		const loginCompare = usersLogin.filter(login => login === event.target.value)

// 		if (loginCompare.length === 0) {
// 			Object.assign(inputElem.nextElementSibling, {
// 				style: errorMessageActiveStyle
// 			})
// 			// return false
// 		} else {
// 			inputElem.nextElementSibling.style = errorMessageStyle
// 			// return true
// 		}

// 		if (event.target.value === '') {
// 			inputElem.nextElementSibling.style = errorMessageStyle
// 		}
// 	}
// }