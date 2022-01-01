import { valueValidation } from './valueValidation'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const emailValidation = function(inputElem) {
	inputElem.oninput = function (event) {
		valueValidation(inputElem, event.target)

		let mailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
		if (event.target.value.match(mailformat)) {
			inputElem.nextElementSibling.style = errorMessageStyle
		} else {
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		}
	}
}
