import { avatarMessageError } from '../elements'

import { errorMessageActiveStyle } from '../styles'

export const showError = (message) => {
	Object.assign(avatarMessageError, {
		style: errorMessageActiveStyle,
		textContent: message
	})
}