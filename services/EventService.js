import axios from 'axios'
const apiClient = axios.create({
    baseURL:'http://localhost:3004',
    withCredentials:false,
    headers:{
        Accept:'application/',
        'Content-type':'application/json'
    }
})
export default{
    getEvent(){
        return apiClient.get('/events')
    }
}