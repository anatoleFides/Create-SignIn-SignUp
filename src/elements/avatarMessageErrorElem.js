import { createElem } from '../helpers'

import { errorMessageStyle } from '../styles'

let avatarMessageError

export const avatarMessageErrorElem = (webElem, container) => {
	avatarMessageError = Object.assign(webElem.createElem(container, 'p'), {
		style: errorMessageStyle,
		innerText: 'Invalid file type'
	})
}

export {
	avatarMessageError
}
