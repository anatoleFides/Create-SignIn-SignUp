// import {
// 	valueValidation,
// 	loginValidation,
// 	phoneValidation,
// 	emailValidation,
// 	passwordValidation
//  } from 'helpers'

import { valueValidation } from './valueValidation'
import { loginValidation } from './loginValidation'
import { phoneValidation } from './phoneValidation'
import { emailValidation } from './emailValidation'
import { passwordValidation } from './passwordValidation'

export function inputValidation (inputElem) {
	if (valueValidation(inputElem)) {
		// if (loginValidation(inputElem)) {
		// 	if (phoneValidation(inputElem)) {
		// 		if (emailValidation(inputElem)) {
		// 			if (passwordValidation(inputElem)) {
		// 				// return
		// 			}
		// 		}
		// 	}
		// }
	}
}

