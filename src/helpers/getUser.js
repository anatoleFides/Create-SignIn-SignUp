export const getUser = async user => {
	const response = await fetch('http://localhost:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			if (response.status === 201) { 
				document.getElementsByTagName('sign-up')[0].remove()
			}
}