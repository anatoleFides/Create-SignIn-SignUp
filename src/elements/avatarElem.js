import { createElem } from '../helpers'

import { getDefaultAvatar } from '../assets'

import {
	imageStyle,
	avatarContainerStyle,
	avatarStyle,
	avatarBodyStyle
} from '../styles'

let avatar

export const avatarElem = (webElem, container) => {
	const avatar__container = Object.assign(webElem.createElem(container, 'div'), {
		style: avatarContainerStyle
	})
	
	avatar = Object.assign(webElem.createElem(avatar__container, 'input'), {
		type: 'file',
		style: avatarStyle,
		disabled: true
	})
		
	const avatar__body = Object.assign(webElem.createElem(avatar__container, 'div'), {
		style: avatarBodyStyle
	})

	window[Symbol.for('photo')] = Object.assign(webElem.createElem(avatar__body, 'img'), {
		src: getDefaultAvatar(),
		style: imageStyle
	})
}

export {
	avatar
}