import { resetInputSignUp } from './'

export const closeSignUp = (event) => {
  resetInputSignUp()
  document.getElementById("sign-up").remove()
}
