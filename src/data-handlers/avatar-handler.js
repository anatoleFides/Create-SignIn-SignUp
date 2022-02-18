export const avatarHandler = (function () {
  let avatar = ''
  return function (property) {
  if (!property) return avatar
    avatar = property
  }
})()
