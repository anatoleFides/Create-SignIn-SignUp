import { endpoint } from '../assets'

export const usersCollection = async () => await (await fetch(endpoint)).json()