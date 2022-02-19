import { createElem } from '../helpers'

import { forgotPasswordStyle } from '../styles'

export const forgotPasElem = (webElem, container) => {
  Object.assign(webElem.createElem(container, 'a'), {
    style: forgotPasswordStyle,
    innerText: 'Forgot password?',
  })
}