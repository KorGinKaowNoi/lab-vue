import axios from 'axios'
const student_api = axios.create({
    baseURL:'https://dv-student-backend-2019.appspot.com/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-type':'application/json'
    }  
})
export default{
    getStudents(){
        return student_api.get('/students');
    }
}