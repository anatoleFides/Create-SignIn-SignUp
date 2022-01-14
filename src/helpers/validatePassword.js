import { valueValidation } from './'
import { validateEmptyString } from './'
import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

export const validatePassword = (inputElem) => {
	inputElem.oninput = (event) => {
		valueValidation(inputElem, event.target)

		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
			inputElem.nextElementSibling.style = errorMessageActiveStyle
		} else { 
			event.target.style.color = '#090'
			inputElem.nextElementSibling.style = errorMessageStyle
		}

		validateEmptyString(inputElem, event.target)
	}
}