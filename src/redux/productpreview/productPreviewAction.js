import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILURE
} from './productPreviewTypes'
import axios from 'axios'

export const getProductRequest =()=>{
    return{
        type: PRODUCT_REQUEST
    }
}

export const getProductSuccess=(productPreview)=>{
    return{
        type: PRODUCT_SUCCESS,
        payload: productPreview
    }
}

export const getProductFailure=(error)=>{
    return{
        type: PRODUCT_FAILURE,
        payload: error
    }
}

export const getProduct=(id)=>{
    return(dispatch)=>{
        dispatch(getProductRequest())
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                const productPreview = res.data
                dispatch(getProductSuccess(productPreview))
            })
            .catch(error=>{
                dispatch(getProductFailure(error))
            })
    }
}