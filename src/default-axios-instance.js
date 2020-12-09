import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://sweaterweathertest-default-rtdb.firebaseio.com/',
});

export default instance;
