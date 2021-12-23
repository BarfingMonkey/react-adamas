import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILURE
} from './productPreviewTypes'

const initialState ={
    loading: false,
    previewProduct: [],
    error:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
       case PRODUCT_REQUEST:
           return{
               ...state,
               loading: true
           }
       case PRODUCT_SUCCESS:
           return{
               loading: false,
               productPreview: action.payload,
               error: ''
           }
       case PRODUCT_FAILURE:
           return{
               loading: false,
               productPreview:[],
               error: action.payload
           }
       default: return state
   }
}

export default reducer