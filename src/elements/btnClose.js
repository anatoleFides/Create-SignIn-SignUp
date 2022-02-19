import { createElem } from '../helpers'

import { buttonCloseStyle } from '../styles'

export const btnClose = (webElem, container, funcClose) => {
  const close = Object.assign(webElem.createElem(container, 'div'), {
    innerText: 'x',
    style: buttonCloseStyle,
    onclick: funcClose
  })
}
