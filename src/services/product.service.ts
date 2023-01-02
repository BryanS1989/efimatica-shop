import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export default {
    async getProducts() {
        const endpoint = '/products';
        return await axios.get(BASE_URL + endpoint);
    },
};
