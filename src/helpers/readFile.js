export const readFile = function (event) {
	const reader = new FileReader
	reader.onload = function (ev) {
		photo.src = ev.target.result
	}
	reader.readAsDataURL(event.target.files[0])
}