import{
    SET_CART_SUCCESS,
    DELETE_CART_SUCCESS,
    UPDATE_CART_SUCCESS
} from './cartTypes'

const initialState={
    cart : []
}

initialState.cart= localStorage.getItem('cart') 
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_CART_SUCCESS:
            return{
                ...state,
                cart: [...action.payload]
            }
        case UPDATE_CART_SUCCESS:
            return{
                ...state,
                cart: [...action.payload]
            }
        case DELETE_CART_SUCCESS:
            return{
                ...state,
                cart: [...action.payload]
            }
        default:
            return state
    }
}

export default reducer;

