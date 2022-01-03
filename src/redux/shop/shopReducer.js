import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './shopType'

const initialState ={
    loading: false,
    shopProducts: [],
    totalPages: 0,
    error:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
       case FETCH_PRODUCT_REQUEST:
           return{
               ...state,
               loading: true
           }
       case FETCH_PRODUCT_SUCCESS:
           return{
               loading: false,
               shopProducts: action.payload.shopProducts,
               totalPages: action.payload.totalPages,
               error: ''
            }
       case FETCH_PRODUCT_FAILURE:
           return{
               loading: false,
               shopProducts:[],
               totalPages: null,
               error: action.payload
           }
       default: return state
   }
}

export default reducer