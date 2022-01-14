// import { usersCollection } from './usersCollection'
// import {
// 	buttonDisabledStyle,
// 	buttonSubmitStyle
// } from '../styles'

// export const compareUsersAutorize = async objectAutorize => {
// 	const users = []
// 	await usersCollection().then(response => response
// 		.map(item => users.push(item)))
	

// 	for (const user of users) {
// 		if (objectAutorize.compareWith(user) === true) {
// 			Object.assign(window[Symbol.for('buttonSignIn')], {
// 				disabled: false,
// 				style: buttonSubmitStyle
// 			})

// 			const userAutorize = users[users.indexOf(user)]
// 			console.log(userAutorize)

// 		} else Object.assign(window[Symbol.for('buttonSignIn')], {
// 				disabled: true,
// 				style: buttonDisabledStyle
// 			})
// 	}
// }