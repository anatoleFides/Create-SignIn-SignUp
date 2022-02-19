import { errorMessageStyle } from '../styles'

export const resetInputSignIn = () => {
  window[Symbol.for('listInputSignIn')].forEach(input => {
    Object.assign(input, {
      value: ''
    })
    Object.assign(input.nextElementSibling, {
      style: errorMessageStyle
    })
  })
}
