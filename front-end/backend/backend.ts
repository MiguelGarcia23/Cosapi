import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://localhost:3030'
})

export default backend;