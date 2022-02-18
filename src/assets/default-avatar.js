export const defaultPicture = 'https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_20.jpg'

export const getDefaultAvatar = (function () {
  let avatar = defaultPicture
  return function (value) {
    if (value) {
      avatar = value
    } else return avatar
  }
})()
