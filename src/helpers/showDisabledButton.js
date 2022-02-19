import {
  buttonSubmitStyle,
  buttonDisabledStyle
} from '../styles'

export const showDisabledButton = (object, propBoolean) => {
  propBoolean ? Object.assign(object, {
      disabled: false,
      style: buttonSubmitStyle
    }) : Object.assign(object, {
        disabled: true,
        style: buttonDisabledStyle
      })
}
