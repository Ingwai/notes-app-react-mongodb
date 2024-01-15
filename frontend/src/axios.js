import axios from 'axios';

const instance = axios.create({
	baseURL: import.meta.env.API_URL || 'http://localhost:3001/api',
});

export default instance;
