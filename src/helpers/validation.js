import { valueValidation } from 'helpers'
import { loginValidation } from 'helpers'
import { phoneValidation } from 'helpers'
import { emailValidation } from 'helpers'
import { passwordValidation } from 'helpers'

export function inputValidation (inputElem) {
	valueValidation(inputElem)
	loginValidation(inputElem)
	phoneValidation(inputElem)
	emailValidation(inputElem)
	passwordValidation(inputElem)
}

