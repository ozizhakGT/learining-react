import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 47e6fb98ff8b5eaaffdc757c0572007088160702b3c634de5a88fe919f19c284'
    }
})