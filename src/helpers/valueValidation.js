import { inputValidationStyle } from '../styles'
import { inputStyle } from '../styles'

export const valueValidation = function (elem) {
		if (elem.value === "") {
			Object.assign(elem, {
				style: inputValidationStyle
			})
			// Object.assign(document.getElementById("submit-button"), {
			// 	disabled: `disabled`

			// })
		}
	elem.oninput = function (event) {
		console.log(event.target.value.length)
		console.log(event.target.value)
		event.target.value !== "" 
			? elem.style = inputStyle : elem.style = inputValidationStyle
	}
}