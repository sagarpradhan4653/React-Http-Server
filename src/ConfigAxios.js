import axios from 'axios'



const configAxios  = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})



export default configAxios;
