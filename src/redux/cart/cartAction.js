import{
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    POST_CART_REQUEST,
    POST_CART_SUCCESS,
    POST_CART_FAILURE
} from './cartTypes'
import axios from 'axios'

//GET REQUESTS
export const getCartRequest=()=>{
    return{
        type: GET_CART_REQUEST
    }
}

export const getCartSuccess=(cartItems)=>{
    return{
        type: GET_CART_SUCCESS,
        payload: cartItems
    }
}

export const getCartFailure=(error)=>{
    return{
        type: GET_CART_FAILURE,
        payload: error
    }
}

//POST REQUESTS
export const postCartRequest=()=>{
    return{
        type: POST_CART_REQUEST
    }
}

export const postCartSuccess=(message)=>{
    return{
        type: POST_CART_SUCCESS,
        payload: message
    }
}

export const postCartFailure=(error)=>{
    return{
        type: POST_CART_FAILURE,
        payload: error
    }
}


export const getCart=(id)=>{
    return(dispatch)=>{
        dispatch(getCartRequest())
        axios({
            method: 'get',
            url:`http://localhost:8000/api/publicsite/cart/${id}`
        })
            .then((res)=>{
                const cartItems= res.data
                dispatch(getCartSuccess(cartItems))
            })
            .catch(error=>{
                dispatch(getCartFailure(error))
            })
    }
}

export const postCart=(formdata, id)=>{
    return(dispatch)=>{
        dispatch(postCartRequest())
        axios({
            method: 'post',
            url:`http://localhost:8000/api/publicsite/cart/${id}`,
            data: formdata
        })
            .then((res)=>{
                //console.log(res)
                dispatch(postCartSuccess(res.data.message))
            })
            .catch(error=>{
                dispatch(postCartFailure(error))
            })
    }
}