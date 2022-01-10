export const openCloseBurgerMenu = () => {
	const buttonBurger = document.getElementById("burger-menu")
	Object.assign(buttonBurger, {
		onclick: function (event) {
			buttonBurger.classList.toggle('open')
			document.getElementById("header-menu").classList.toggle('active')
			document.getElementsByTagName('body')[0].classList.toggle('hidden')
		}
	})
}