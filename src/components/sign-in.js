import {
  wrapperStyle,
  containerStyle,
  titleStyle,
  formsBodyStyle,
  outlineStyle,
  forgotPasswordStyle
} from '../styles'

import {
  loginHandler,
} from '../data-handlers'

import {
  btnClose,
  logoElem,
  titleElem,
  inputsAuthorize,
  loginAuthorize,
  passwordAuthorize,
  forgotPasElem,
  buttonElemAuthorize
} from '../elements'

import {
  closeSignIn,
  testLoginSignIn,
  testPassordSignIn,
  authorizeUser,
  createElem
} from '../helpers'

class SignIn extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'closed' })

    shadow.innerHTML = outlineStyle

    const wrapper = Object.assign(this.createElem(shadow, 'div'), {
      style: wrapperStyle
    })

    const container = Object.assign(this.createElem(wrapper, 'div'), {
      style: containerStyle
    })

    btnClose(this, container, closeSignIn)

    logoElem(this, container)

    titleElem(this, container)

    const forms__body = Object.assign(this.createElem(container, 'div'), {
      style: formsBodyStyle
    })

    inputsAuthorize(this, forms__body)

    loginAuthorize.onchange = function (event) {
      loginHandler(event.target.value)
      testLoginSignIn(event.target, loginHandler())
    }

    passwordAuthorize.oninput = function (event) {
      testPassordSignIn(event.target, event.target.value)
    }

    forgotPasElem(this, container)

    buttonElemAuthorize(this, container)
  }
}

SignIn.prototype.createElem = createElem

customElements.define('sign-in', SignIn)

const elemSignIn = document.createElement('sign-in')
elemSignIn.id = 'sign-in'

export default elemSignIn
