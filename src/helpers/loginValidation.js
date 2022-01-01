import { valueValidation } from './valueValidation'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const loginValidation = function(inputElem) {
	inputElem.oninput = function(event) {
		valueValidation(inputElem, event.target)

		let letters = /^[A-Za-z]+$/
		if (!event.target.value.match(letters)) {
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		} else {
			inputElem.nextElementSibling.style = errorMessageStyle
		}
	}
}