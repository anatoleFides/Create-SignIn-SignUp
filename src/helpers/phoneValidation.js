import { valueValidation } from './valueValidation'

export const phoneValidation = function(inputElem) {
	inputElem.oninput = function(event) {
		valueValidation(inputElem, event.target)
	}
}