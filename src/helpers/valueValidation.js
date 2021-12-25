import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const valueValidation = function (elem) {
		if (elem.value === "") {
			Object.assign(elem, {
				style: inputValidationStyle
			})
		}
	elem.oninput = function (event) {
		event.target.value !== "" 
			? elem.style = inputStyle : elem.style = inputValidationStyle
	}
}