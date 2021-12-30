import {
	valueValidation,
	loginValidation,
	phoneValidation,
	emailValidation,
	passwordValidation
 } from 'helpers'

export function inputValidation (inputElem) {
	if (valueValidation(inputElem)) {
		if (loginValidation(inputElem)) {
			if (phoneValidation(inputElem)) {
				if (emailValidation(inputElem)) {
					if (passwordValidation(inputElem)) {
						return
					}
				}
			}
		}
	}

	// valueValidation(inputElem)
	// loginValidation(inputElem)
	// phoneValidation(inputElem)
	// emailValidation(inputElem)
	// passwordValidation(inputElem)
}

