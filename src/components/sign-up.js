
import {
  wrapperStyle,
  containerStyle,
  formsBodyStyle,
  outlineStyle,
  buttonSubmitStyle,
  buttonDisabledStyle
} from '../styles'

import {
  btnClose,
  logoElem,
  titleElem,
  avatarElem,
  avatar,
  avatarMessageErrorElem,
  buttonElem,
  button
} from '../elements'

import {
  closeSignUp,
  validateLogin,
  validateName,
  validatePhone,
  validateEmail,
  validatePassword,
  readFile,
  createElem,
  getInputs,
  login,
  name,
  telephone,
  email,
  password
} from '../helpers'

class SignUp extends HTMLElement {
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

    btnClose(this, container, closeSignUp)

    logoElem(this, container)

    titleElem(this, container)

    const forms__body = Object.assign(this.createElem(container, 'div'), {
      style: formsBodyStyle
    })

    const elems__body = this.createElem(forms__body, 'div')

    getInputs(this, elems__body)

    avatarElem(this, forms__body)

    avatarMessageErrorElem(this, forms__body)

    login.onchange = (event) => validateLogin(event.target.value)

    name.oninput = (event) => validateName(event.target.value)

    telephone.oninput = (event) => validatePhone(event.target.value)

    email.oninput = (event) => validateEmail(event.target.value)

    password.oninput = (event) => validatePassword(event.target.value)

    avatar.onchange = (event) => readFile(event.target.files[0], window[Symbol.for('photo')])

    buttonElem(this, container)
  }
}

SignUp.prototype.createElem = createElem

customElements.define('sign-up', SignUp)

const elemSignUp = document.createElement('sign-up')
elemSignUp.id = 'sign-up'

export default elemSignUp
