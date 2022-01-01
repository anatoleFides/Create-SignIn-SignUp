import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const valueValidation = function (inputElem, callbackValue) {
		callbackValue.value.length !== 0
			? inputElem.style = inputStyle : inputElem.style = inputValidationStyle
	}
