import axios from 'axios';

const signup = async (formdata)=>{
    return await axios({
        method: 'post',
        url: 'http://localhost:8000/api/signup',
        data: formdata,
        withCredentials: true,
    })
        .then((res)=>{    
            if(res.data && res.data.user){
                console.log(`auth service login: ${Object.keys(res.data)}`)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', res.data.user)
            }
            return res
        })
}

const login = (formdata)=>{
    return axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
        data: formdata,
        withCredentials: true
    })
        .then((res)=>{
            
            if(res.data && res.data.user){
                console.log(`auth service login: ${Object.keys(res.data)}`)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user',  JSON.stringify(res.data.user))
            }
            return res
        })
}

const logout=()=>{
    localStorage.removeItem("token");
}

export default{
    signup,
    login,
    logout
};