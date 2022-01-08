import { valueValidation } from './valueValidation'
import { emptiValidationStyle } from './emptiValidationStyle'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const passwordValidation = (inputElem) => {
	inputElem.oninput = (event) => {
		valueValidation(inputElem, event.target)

		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		} else { 
			event.target.style.color = '#090'
			inputElem.nextElementSibling.style = errorMessageStyle
		}

		emptiValidationStyle(inputElem, event.target)
	}
}