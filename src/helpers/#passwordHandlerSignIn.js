// import { usersCollection } from './'
// import { validateEmptyString } from './'
// import {
// 	errorMessageStyle,
// 	errorMessageActiveStyle,
// 	buttonDisabledStyle,
// 	buttonSubmitStyle
// } from '../styles'

// export const passwordHandlerSignIn = (inputElem) => {
// 	// const users = []
// 	// usersCollection().then(response => response
// 	// 	.map(item => users.push(item)))
// 	// console.log(users)

// 	inputElem.oninput = (event) => {
// 		const usersPassord = users.map(item => item.password)

// 		window[Symbol.for('userPasswordIndex')] = usersPassord.indexOf(usersPassord
// 			.filter(item => item === event.target.value)[0])

// 		if (window[Symbol.for('userLoginIndex')] === window[Symbol.for('userPasswordIndex')]) {
// 			Object.assign(inputElem.nextElementSibling, {
// 				style: errorMessageStyle
// 			})
// 			Object.assign(window[Symbol.for('buttonSignIn')], {
// 				disabled: false,
// 				style: buttonSubmitStyle
// 			})
// 		} else {
// 			Object.assign(inputElem.nextElementSibling, {
// 					style: errorMessageActiveStyle
// 			})
// 			Object.assign(window[Symbol.for('buttonSignIn')], {
// 				// disabled: true,
// 				style: buttonDisabledStyle
// 			})
// 		}

// 		validateEmptyString(inputElem, event.target)
// 	}
// }