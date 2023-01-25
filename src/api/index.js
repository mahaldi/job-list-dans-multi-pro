import axios from 'axios'
const baseURL = 'http://dev3.dansmultipro.co.id/'
const instance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})
export default instance
