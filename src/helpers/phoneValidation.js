import { valueValidation } from './valueValidation'
import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const phoneValidation = (inputElem) => {
	inputElem.oninput = (event) => {
		valueValidation(inputElem, event.target)

		let phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
		
		event.target.value.match(phoneformat) ? Object.assign(inputElem.nextElementSibling, {
			style: errorMessageStyle
		}) : Object.assign(inputElem.nextElementSibling, {
			style: errorMessageActiveStyle
		})

		emptiValidationStyle(inputElem, event.target)
	}
}