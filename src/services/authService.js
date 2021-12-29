import axios from 'axios';

const signup = async (formdata)=>{
    return await axios({
        method: 'post',
        url: 'http://localhost:8000/api/signup',
        data: formdata,
        withCredentials: true,
    })
}

const login = (formdata)=>{
    return axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
        data: formdata,
        withCredentials: true
    })
    .then((res)=>console.log('login ip hit', res))
}

const logout=()=>{
    localStorage.removeItem("token");
}

export default{
    signup,
    login,
    logout
};