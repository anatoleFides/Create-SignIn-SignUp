export const openCloseBurgerMenu = () => {
  document.getElementById("burger-menu").classList.toggle('open')
  document.getElementById("header-menu").classList.toggle('active')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}
