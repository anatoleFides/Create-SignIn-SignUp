import { avatarHandler } from '../data-handlers'

import { resetInputSignIn } from './'

export const authorizeUser = async objectAuthorize => {
  document.getElementById("not_authorize").classList.remove('uzer-not_active')
  document.getElementById("authorize").classList.add('user-active')
  document.getElementById("user-name").textContent = objectAuthorize.loginAuthorize
  document.getElementById("user-avatar").src = avatarHandler()

  resetInputSignIn()

  document.getElementsByTagName('sign-in')[0].remove()
}
