import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './authTypes';

  const token= localStorage.getItem('token');
  const user= localStorage.getItem('user')

  const initialState = token
  ? { isLoggedIn: true, data:{token, user} }
  : { isLoggedIn: false, data: null };

  export default function(state=initialState, action){
      const { type, payload} = action;
      console.log(`reducer type: ${type} payload: ${action.payload}`)
      switch(type){
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                data: payload.data
            };
        case SIGNUP_FAILURE:
            return{
                ...state,
                isLoggedIn: false,
                data: payload.data
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                data: payload.data
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isLoggedIn: false,
                data: payload.data
            }
        case LOGOUT:
            return{
                ...state,
                isLoggedIn: false,
                data: null
            }
        default: return state
    }
  }


