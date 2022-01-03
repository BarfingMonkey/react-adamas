import{
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
} from './shopType'
import axios from 'axios'


export const fetchProductRequest =()=>{
    return{
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess=(shopProducts,totalPages)=>{
    return{
        type: FETCH_PRODUCT_SUCCESS,
        payload: {shopProducts,totalPages}
    }
}

export const fetchProductFailure=(error)=>{
    return{
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const fetchProduct=(pageNumber, id)=>{
    return(dispatch)=>{
        dispatch(fetchProductRequest())
        axios({
            method: 'get',
            url:`http://localhost:8000/api/publicsite/categories/products/?page=${pageNumber}&id=${id?id:''}`,
            headers:{
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res)=>{
                const shopProducts= res.data.data
                const totalPages= res.data.totalPage
                dispatch(fetchProductSuccess(shopProducts,totalPages))
            })
            .catch(error=>{
                dispatch(fetchProductFailure(error))
            })
    }
}