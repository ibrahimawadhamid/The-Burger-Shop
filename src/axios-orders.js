import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-shop-01.firebaseio.com/'
});

export default instance;
