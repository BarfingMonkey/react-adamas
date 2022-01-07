import{
    GET_PAYMENTHISTORY_REQUEST,
    GET_PAYMENTHISTORY_SUCCESS,
    GET_PAYMENTHISTORY_FAILURE,
} from './paymentHistoryTypes'

const initialState={
    loading: false,
    paymentHistory: [],
    error: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_PAYMENTHISTORY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_PAYMENTHISTORY_SUCCESS:
            return{
                ...state,
                loading: false,
                paymentHistory: action.payload,
                error: '',
            }   
        case GET_PAYMENTHISTORY_FAILURE:
            return{
                ...state,
                loading: false,
                paymentHistory: '',
                error: action.payload
            }
        default: return state
    }
}

export default reducer