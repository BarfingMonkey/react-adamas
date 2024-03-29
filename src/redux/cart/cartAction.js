import{
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    
    POST_CART_REQUEST,
    POST_CART_SUCCESS,
    POST_CART_FAILURE,

    PUT_CART_REQUEST,
    PUT_CART_SUCCESS,
    PUT_CART_FAILURE,

    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE,
} from './cartTypes'
import axios from 'axios'

//GET REQUESTS
export const getCartRequest=()=>{
    return{
        type: GET_CART_REQUEST
    }
}

export const getCartSuccess=(cartItems, total)=>{
    return{
        type: GET_CART_SUCCESS,
        payload: {cartItems, total}
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

export const postCartSuccess=(cartItems, total)=>{
    return{
        type: POST_CART_SUCCESS,
        payload: {cartItems, total}
    }
}

export const postCartFailure=(error)=>{
    return{
        type: POST_CART_FAILURE,
        payload: error
    }
}

//put
export const putCartRequest=(qty, id)=>{
    return{
        type: PUT_CART_REQUEST
    }
}

export const putCartSuccess=(cartItems,total)=>{
    return{
        type: PUT_CART_SUCCESS,
        payload: {cartItems, total}
    }
}

export const putCartFailure=(error)=>{
    return{
        type: PUT_CART_FAILURE,
        payload: error
    }
}

//delete
export const deleteCartRequest=()=>{
    return{
        type: DELETE_CART_REQUEST
    }
}

export const deleteCartSuccess=(cartItems, total)=>{
    return{
        type: DELETE_CART_SUCCESS,
        payload: {cartItems, total}
    }
}

export const deleteCartFailure=(error)=>{
    return{
        type: DELETE_CART_FAILURE,
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
                let total=0;
                if(cartItems.length>0){
                    for(let cartItem of cartItems){
                        total = total + (parseInt(cartItem.qty) * parseInt(cartItem.productInfo.price))
                    }
                }
                console.log('total: ',total)
                dispatch(getCartSuccess(cartItems,total))
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
                const cartItems= res.data
                let total=0;
                if(cartItems.length>0){
                    for(let cartItem of cartItems){
                        total = total + (parseInt(cartItem.qty) * parseInt(cartItem.productInfo.price))
                    }
                }
                console.log('total: ',total)
                dispatch(postCartSuccess(cartItems,total))
            })
            .catch(error=>{
                dispatch(postCartFailure(error))
            })
    }
}

export const putCart=(qty, id)=>{
    return(dispatch)=>{
        dispatch(postCartRequest())
        axios({
            method: 'put',
            url:`http://localhost:8000/api/publicsite/cart/${id}`,
            data: qty
        })
            .then((res)=>{
                const cartItems= res.data
                let total=0;
                if(cartItems.length>0){
                    for(let cartItem of cartItems){
                        total = total + (parseInt(cartItem.qty) * parseInt(cartItem.productInfo.price))
                    }
                }
                console.log('total: ',total)
                dispatch(putCartSuccess(cartItems,total))
            })
            .catch(error=>{
                dispatch(putCartFailure(error))
            })
    }
}

export const deleteCart=(id)=>{
    return(dispatch)=>{
        dispatch(postCartRequest())
        axios({
            method: 'delete',
            url:`http://localhost:8000/api/publicsite/cart/${id}`,
        })
            .then((res)=>{
                const cartItems= res.data
                let total=0;
                if(cartItems.length>0){
                    for(let cartItem of cartItems){
                        total = total + (parseInt(cartItem.qty) * parseInt(cartItem.productInfo.price))
                    }
                }
                console.log('total: ',total)
                dispatch(deleteCartSuccess(cartItems,total))
            })
            .catch(error=>{
                dispatch(deleteCartFailure(error))
            })
    }
}