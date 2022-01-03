import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE
} from './productTypes'

const initialState ={
    loading: false,
    products: [],
    error:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
       case GET_PRODUCT_REQUEST:
           return{
               ...state,
               loading: true
           }
       case GET_PRODUCT_SUCCESS:
           return{
               loading: false,
               products: action.payload,
               error: ''
           }
       case GET_PRODUCT_FAILURE:
           return{
               loading: false,
               products:[],
               error: action.payload
           }
       default: return state
   }
}

export default reducer