import{
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT,
} from './authTypes'

import AuthService from '../../services/authService'

//auth
export const signup = (formdata)=>(dispatch)=>{
    return AuthService.signup(formdata).then(
        (res)=>{
            if(res.data && res.data.user){
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: {data: res.data}
                });
                return Promise.resolve();
            }
            if(res.data && res.data.errors){
                dispatch({
                    type: SIGNUP_FAILURE,
                    payload: {data: res.data}
                })
                return Promise.reject();
            }
        }
    )
}

export const login=(formdata)=>(dispatch)=>{
    return AuthService.login(formdata).then(
        (res)=>{
           
            if(res.data && res.data.user){
                console.log(`auth action login: ${Object.keys(res)}`)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {data: res.data}
                });
                return Promise.resolve();
            }
            if(res.data && res.data.errors){
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {data: res.data}
                })
                return Promise.reject();
            }
        }
    );
};

export const logout=()=>(dispatch)=>{
    AuthService.logout();

    dispatch({
        type: LOGOUT
    });
};