import { validateEmptyString } from './'

import {
	errorMessageStyle,
	errorMessageActiveStyle
} from '../styles'

import { passwordRule } from '../configs'

export const validatePassword = (inputElem, value) => {

	if (value.length < 8) {
		inputElem.style.color = '#f00'
		inputElem.nextElementSibling.style = errorMessageActiveStyle

		validateEmptyString(inputElem, value)
		
		return false
	} else { 
		inputElem.style.color = '#090'
		inputElem.nextElementSibling.style = errorMessageStyle

		return true
	}


}