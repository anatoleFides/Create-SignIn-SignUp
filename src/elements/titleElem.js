import { createElem } from '../helpers'

import { titleStyle } from '../styles'

export const titleElem = (webElem, container) => {
		const title = Object.assign(webElem.createElem(container, 'h2'), {
			innerText: 'Sign up to Fantasy World',
			style: titleStyle
		})
}