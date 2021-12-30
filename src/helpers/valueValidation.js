// import { inputValidationStyle } from '../styles'
// import { inputStyle } from '../styles'

export const valueValidation = function (inputElem) {
	if (inputElem.value.length === 0) {
		alert("User Id should not be empty")
		inputElem.focus()
		return false
	}
	// elem.oninput = function (event) {
	// 	event.target.value !== "" 
	// 		? elem.style = inputStyle : elem.style = inputValidationStyle
	// }
	return true
}