import { valueValidation } from './valueValidation'
import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const emailValidation = (inputElem) => {
	inputElem.oninput = (event) => {
		valueValidation(inputElem, event.target)

		let mailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

		event.target.value.match(mailformat) 
			? Object.assign(inputElem.nextElementSibling, {
				style: errorMessageStyle
			}) : Object.assign(inputElem.nextElementSibling, {
				style: errorMessageActiveStyle
			})

		emptiValidationStyle(inputElem, event.target)
	}
}
