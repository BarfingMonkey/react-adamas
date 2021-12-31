import{
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT,
} from './authTypes'
import axios from 'axios'
import AuthService from '../../services/authService'

//auth
export const googleSignup = ()=>(dispatch)=>{
    return axios({
        method: "GET",
        url:'http://localhost:8000/api/user',
        withCredentials: true,
    })
        .then((res)=>{
            if(res.data && res.data.user){
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {data: res.data}
                });
                return Promise.resolve();
            }
            else{
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {data: res.data}
                })
                return Promise.reject();
            }
            console.log(res.data)
        })
        .catch(err=>console.log(err))
}
export const signup = (formdata)=>(dispatch)=>{
    console.log('signup dispatched')
    return axios({
        method: 'post',
        url: 'http://localhost:8000/api/signup',
        data: formdata,
        withCredentials: true,
    })
    .then((res)=>{
        console.log('sign up ip hit', res)
        if(res.data==="Successfully Authenticated"){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {data: res.data}
            });
            return Promise.resolve();
        }
        else{
            dispatch({SIGNUP_FAILURE,
                payload: {data: res.data}
            })
            return Promise.reject();
        }
    })
}

export const login=(formdata)=>(dispatch)=>{
    console.log('login dispatched')
    return axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
        data: formdata,
        withCredentials: true
    })
    .then((res)=>{
        console.log('login ip hit', res)
        if(res.data && res.data.user){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {data: res.data}
            });
            return Promise.resolve();
        }
        else{
            dispatch({
                type: LOGIN_FAILURE,
                payload: {data: res.data}
            })
            return Promise.reject();
        }
    })
};

export const logout=()=>(dispatch)=>{
    return axios({
        method: 'get',
        url: 'http://localhost:8000/api/logout',
        withCredentials: true
    }).then((res)=>{
        dispatch({
            type: LOGOUT
        });
    })
    
};