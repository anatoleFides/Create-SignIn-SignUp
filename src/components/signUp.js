class SignUp extends HTMLElement {
	constructor () {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		const wrapper = Object.assign(this.createElem(shadow, 'div'), {
		style: `
				width: 100vw;
				height: 100vh;
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				background: rgba(204, 204, 204, 0.2);
				font-family: Arial;
				margin: 0;
				padding: 0;
				overflow: hidden;
			`
		})

		const container = Object.assign(this.createElem(wrapper, 'div'), {
			style: `
				max-width: 500px;
				box-shadow: 2px 2px 8px #000;
				background: rgba(240, 255, 255, 0.6);
				border-radius: 8px;
				padding: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			`
		})

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
				font-size: 32px;
				font-weight: 700;
				color: #FF8C00;
				margin: 0 auto;
				padding: 16px
			`
		})

		const form__body = Object.assign(this.createElem(container, 'div'), {
			style: `
				width: 100%;
			`
		})
		const [login, telephone, email, password, avatar] = [['text', 'Login'], ['tel', '+38(___)___-__-__'], ['email', 'e-mail'], ['password', 'Password'], ['file', '']]
			.map(function (item) {
				const elem = this.createElem(form__body, 'input')
				elem.type = item[0],
				elem.placeholder = item[1],
				elem.style = `
						width: 90%;
						display: block;
						margin: 12px auto;
						padding: 8px 0 8px 16px;
						border-radius: 3px;
						font-size: 16px;
						border: 1px solid #FF8C00;
						transition: all .5s ease;
					`
				return elem
			}.bind(this))

			avatar.onchange = function (event) {
				const reader = new FileReader
				reader.onload = function (ev) {
					avatar__photo.src = ev.target.result
				}
				reader.readAsDataURL(event.target.files[0])
			}
		const avatar__container = Object.assign(this.createElem(form__body, 'div'), {
			style: `
				width: 70px;
				height: 70px;
				margin: 4px auto; 
				border-radius: 50%;
				overflow: hidden;
				position: relative;
				transform: translateY(-55px);
			`
		})
		const avatar__photo = Object.assign(this.createElem(avatar__container, 'img'), {
			src: 'https://apartila.com/images/default_avatar.png',
			style: `
				max-width: 100%; 
				display: block;
			`
		})
		const button = Object.assign(this.createElem(container, 'div'), {
			innerText: 'submit',
			style: `
				padding: 8px; 
				margin: 16px auto; 
				background: #f0f; 
				color: #fff; 
				border: none; 
				border-radius: 4px; 
				font-size: 16px; 
			`
		})
	}

	createElem (сontainerName, tagName) { 
		console.log(сontainerName.nodeType) 
		return сontainerName.appendChild(document.createElement(tagName)) 
	}
}

customElements.define('sign-up', SignUp)

