import{
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    POST_CART_REQUEST,
    POST_CART_SUCCESS,
    POST_CART_FAILURE
} from './cartTypes'

const initialState ={
    loading: false,
    cartItems: [],
    message: '',
    error:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
       case GET_CART_REQUEST:
           return{
               ...state,
               loading: true
           }
       case GET_CART_SUCCESS:
           return{
               ...state,
               loading: false,
               cartItems: action.payload,
               error: '',
            }
       case GET_CART_FAILURE:
           return{
               ...state,
               loading: false,
               cartItems:[],
               error: action.payload,
           }
           case POST_CART_REQUEST:
            return{
                ...state,
                loading: true
            }
        case POST_CART_SUCCESS:
            return{
                ...state,
                loading: false,
                error: '',
                message: action.payload,
             }
        case POST_CART_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                message: '',
            }
       default: return state
   }
}

export default reducer