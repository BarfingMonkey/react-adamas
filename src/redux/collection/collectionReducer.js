import{
    GET_COLLECTION_REQUEST,
    GET_COLLECTION_SUCCESS,
    GET_COLLECTION_FAILURE
} from './collectionTypes'

const initialState={
    loading:false,
    categories: [],
    error: '',
}

const reducer = (state = initialState, action)=>{
     switch(action.type){
        case GET_COLLECTION_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_COLLECTION_SUCCESS:
            return{
                loading: false,
                categories: action.payload,
                error: ''
            }
        case GET_COLLECTION_FAILURE:
            return{
                loading: false,
                categories:[],
                error: action.payload
            }
        default: return state
    }
}

export default reducer