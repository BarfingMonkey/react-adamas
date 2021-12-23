import axios from 'axios'
import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
} from './productTypes'

export const getProductRequest =()=>{
    return{
        type: GET_PRODUCT_REQUEST
    }
}

export const getProductSuccess=(products)=>{
    return{
        type: GET_PRODUCT_SUCCESS,
        payload: products
    }
}

export const getProductFailure=(error)=>{
    return{
        type: GET_PRODUCT_FAILURE,
        payload: error
    }
}

export const getProduct=()=>{
    return(dispatch)=>{
        dispatch(getProductRequest())
        axios.get('http://localhost:8000/api/publicsite/products')
            .then(res => {
                const products = res.data
                dispatch(getProductSuccess(products))
            })
            .catch(error=>{
                dispatch(getProductFailure(error))
            })
    }
}