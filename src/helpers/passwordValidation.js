import { valueValidation } from './valueValidation'

export const passwordValidation = function (inputElem) {
	inputElem.oninput = function (event) {
		valueValidation(inputElem, event.target)

		if (event.target.value.length < 8) {
			event.target.style.color = '#f00'
		} else { 
			event.target.style.color = '#090'
		}
	}
}