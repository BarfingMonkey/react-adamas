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

const initialState ={
    loading: false,
    cartItems: [],
    message: '',
    error:'',
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
        case PUT_CART_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case PUT_CART_SUCCESS:
            return{
                ...state,
                loading: false,
                cartItems: action.payload,
                error: '',
            }
        case PUT_CART_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                cartItems: []
            }
        
            case DELETE_CART_REQUEST:
                return{
                    ...state,
                    loading: true,
                }
            case DELETE_CART_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    cartItems: action.payload,
                    error: '',
                }
            case DELETE_CART_FAILURE:
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
                    cartItems: []
                }
       default: return state
   }
}

export default reducer