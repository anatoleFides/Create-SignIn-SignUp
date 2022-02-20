import {
  wrapperStyle,
  containerStyle,
  titleStyle,
  formsBodyStyle,
  inputStyle,
  outlineStyle,
  errorMessageStyle,
  errorMessageActiveStyle,
  forgotPasswordStyle,
  buttonDisabledStyle
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
  forgotPasElem
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

    // const [login, password] = [
    //   ['text', 'Login', 'Login not found'],
    //   ['password', 'Password', 'Invalid passvord']
    // ].map(function (item) {
    //   const elem__container = this.createElem(forms__body, 'div')

    //   const elem = Object.assign(this.createElem(elem__container, 'input'), {
    //     type: item[0],
    //     placeholder: item[1],
    //     style: inputStyle
    //   })

    //   const error__message = Object.assign(this.createElem(elem__container, 'p'), {
    //     textContent: item[2],
    //     style: errorMessageStyle
    //   })

    //   return elem
    // }.bind(this))

    loginAuthorize.onchange = function (event) {
      loginHandler(event.target.value)
      testLoginSignIn(event.target, loginHandler())
    }

    passwordAuthorize.oninput = function (event) {
      testPassordSignIn(event.target, event.target.value)
    }

    forgotPasElem(this, container) 

    // window[Symbol.for('listInputSignIn')] = [loginAuthorize, passwordAuthorize]

    window[Symbol.for('buttonSignIn')] = Object.assign(this.createElem(container, 'button'), {
      innerText: 'Sign In',
      style: buttonDisabledStyle,
      disabled: true,
      onclick: async function (event) {
        await authorizeUser({
          loginAuthorize: loginAuthorize.value,
          passwordAuthorize: passwordAuthorize.value
        })
      }
    })
  }
}

SignIn.prototype.createElem = createElem

customElements.define('sign-in', SignIn)

const elemSignIn = document.createElement('sign-in')
elemSignIn.id = 'sign-in'

export default elemSignIn
