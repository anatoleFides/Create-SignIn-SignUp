import { endpoint } from '../assets'

export const getLogin = async () => {
	const users = await (await fetch(endpoint)).json()

}
