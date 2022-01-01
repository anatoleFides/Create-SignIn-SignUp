import { valueValidation } from './valueValidation'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const phoneValidation = function(inputElem) {
	inputElem.oninput = function(event) {
		valueValidation(inputElem, event.target)

		let phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
		if (event.target.value.match(phoneformat)) {
			inputElem.nextElementSibling.style = errorMessageStyle
		} else {
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		}
	}
}