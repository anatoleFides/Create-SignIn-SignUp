// document.getElementsByClassName('singUp__btn').onclick = function (event) {
// 	console.log(event.target, 'hello')
// 	document.getElementsByTagName('sign-up')[0].add('open-sign_up')
// }

class SignUp extends HTMLElement {
	constructor () {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		const wrapper = Object.assign(this.createElem(shadow, 'div'), {
		style: `
				position: fixed;
				top: 0;
				left: 0;
				z-index: 100;
				width: 100vw;
				height: 100vh;
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				background: rgba(204, 204, 204, 0.8);
				font-family: Arial;
				margin: 0;
				padding: 0;
				overflow: hidden;
			`
		})

		const container = Object.assign(this.createElem(wrapper, 'div'), {
			style: `
				max-width: 360px;
				box-shadow: 2px 2px 8px #000;
				background: rgba(240, 255, 255, 0.8);
				border-radius: 8px;
				padding: 12px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				position: relative;
			`
		})

		const close = Object.assign(this.createElem(container, 'div'), {
			innerText: 'x',
			style: `
				position: absolute;
				top: 12px;
				right: 12px;
				width: 16px;
				height: 16px;
				border-radius: 2px;
				background: #8A2BE2;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			`
		})
		// close.onclick = function (event) {
		// 	const searchClass = document.getElementsByTagName('sign-up')
		// 	console.log(searchClass)
		// 	searchClass[0].remove('open-sign_up')
		// }

		const logo = Object.assign(this.createElem(container, 'div'), {
			style: `
				display: flex;
			`
		})
		const logo__link = Object.assign(this.createElem(logo, 'a'), {
			style: `
				flex: 0 0 100px;
				border-radius: 50%;
				overflow: hidden;
				display: block;
				margin: 0 auto;
			`
		})
		const logo__img = Object.assign(this.createElem(logo__link, 'img'), {
			src: 'https://avatarko.ru/img/kartinka/33/cherep_fantastika_feniks_33560.jpg',
			style: `
				display: block;
				max-width: 100%;
			`
		})

		const title = Object.assign(this.createElem(container, 'h2'), {
			innerText: 'Sign up to Fantasy World',
			style: `
				font-size: 24px;
				font-weight: 700;
				color: #9ACD32;
				margin: 16px auto
			`
		})

		const form__body = Object.assign(this.createElem(container, 'div'), {
			style: `
				width: 100%;
			`
		})
		const [login, telephone, email, password] = [['text', 'Login'], ['tel', '+38(___)___-__-__'], ['email', 'e-mail'], ['password', 'Password']]
			.map(function (item) {
				const elem = this.createElem(form__body, 'input')
				elem.type = item[0],
				elem.placeholder = item[1],
				elem.style = `
						width: 90%;
						display: block;
						margin: 12px auto;
						padding: 4px 0 4px 8px;
						border-radius: 4px;
						font-size: 16px;
						border: 1px solid #FF8C00;
						transition: all .5s ease;
					`
				return elem
			}.bind(this))

			const avatar__container = Object.assign(this.createElem(form__body, 'div'), {
			style: `
				position: relative;
				margin: 36px auto;
			`
			})
			const avatar = Object.assign(this.createElem(avatar__container, 'input'), {
			type: 'file',
			style: `
				display: block;
				// opacity: 0;
				border: 1px solid #FF8C00;
			`
			})
			
		const avatar__body = Object.assign(this.createElem(avatar__container, 'div'), {
			style: `
				width: 80px;
				height: 80px;
				margin: 0 auto; 
				border-radius: 50%;
				overflow: hidden;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			`
		})
		const avatar__photo = Object.assign(this.createElem(avatar__body, 'img'), {
			src: 'https://apartila.com/images/default_avatar.png',
			style: `
				max-width: 100%; 
				display: block;
			`
		})
		avatar.onchange = function (event) {
				const reader = new FileReader
				reader.onload = function (ev) {
					avatar__photo.src = ev.target.result
				}
				reader.readAsDataURL(event.target.files[0])
			}
		const button = Object.assign(this.createElem(container, 'div'), {
			innerText: 'submit',
			style: `
				padding: 8px; 
				margin: 4px auto; 
				background: #9ACD32; 
				color: #fff; 
				border: none; 
				border-radius: 4px; 
				font-size: 20px;
				cursor: pointer;
			`
		})

		button.onclick = async function (event) {
			const user = {
				login: login.value,
				telephone: telephone.value,
				email: email.value,
				password: password.value,
				avatat: avatar__photo.src
			}
			const response = await fetch('http://localhost:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			if (response.status === 201) { 
				document.getElementsByClassName('open-sign_up')[0].remove() 
			}
		}
	}

	createElem (сontainerName, tagName) { 
		console.log(сontainerName.nodeType) 
		return сontainerName.appendChild(document.createElement(tagName)) 
	}
}


customElements.define('sign-up', SignUp)

