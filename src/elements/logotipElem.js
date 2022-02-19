import { createElem } from '../helpers'

import { logoImg } from '../assets'

import {
  logoStyle,
  logoLinkStyle,
  imageStyle,
} from '../styles'

export const logoElem = (webElem, container) => {
  const logo = Object.assign(webElem.createElem(container, 'div'), {
    style: logoStyle
  })

  const logo__link = Object.assign(webElem.createElem(logo, 'a'), {
    style: logoLinkStyle
  })

  const logo__img = Object.assign(webElem.createElem(logo__link, 'img'), {
    src: logoImg,
    style: imageStyle
  })
}
