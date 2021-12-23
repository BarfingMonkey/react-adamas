import axios from 'axios'
import{
    GET_COLLECTION_REQUEST,
    GET_COLLECTION_SUCCESS,
    GET_COLLECTION_FAILURE
} from './collectionTypes';

export const getCollectionRequest=()=>{
    return {
        type: GET_COLLECTION_REQUEST,
    }
}

export const getCollectionSuccess=(categories)=>{
    return{
        type: GET_COLLECTION_SUCCESS,
        payload: categories
    }
}

export const getCollectionFailure=()=>{
    return{
        type: GET_COLLECTION_FAILURE,
        payload: error
    }
}

export const getCollection=()=>{
    return(dispatch)=>{
        dispatch(getCollectionRequest())
        axios.get('http://localhost:8000/api/publicsite/categories')
            .then(res=>{
                const categories = res.data
                dispatch(getCollectionSuccess(categories))
            })
            .catch(error=>{
                dispatch(getCollectionFailure(error.message))
            })
    }
}