export const changeAvatar = avatar.onchange = function (event) {
				const reader = new FileReader
				reader.onload = function (ev) {
					avatar__photo.src = ev.target.result
				}
				reader.readAsDataURL(event.target.files[0])
			}