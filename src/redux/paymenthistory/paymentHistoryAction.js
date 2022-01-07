import axios from 'axios'
import{
    GET_PAYMENTHISTORY_REQUEST,
    GET_PAYMENTHISTORY_SUCCESS,
    GET_PAYMENTHISTORY_FAILURE,
} from './paymentHistoryTypes'

//GET REQUESTS
export const getPaymentHistoryRequest=()=>{
    return{
        type: GET_PAYMENTHISTORY_REQUEST,
    }
}

export const getPaymentHistorySuccess=(paymentHistory)=>{
    return{
        type: GET_PAYMENTHISTORY_SUCCESS,
        payload: paymentHistory,
    }
}

export const getPaymentHistoryFailure=(error)=>{
    return{
        type: GET_PAYMENTHISTORY_FAILURE,
        action: error,
    }
}

export const getPaymentHistory=(id)=>{
    return(dispatch)=>{
        dispatch(getPaymentHistoryRequest())
        axios({
            method: 'get',
            url:`http://localhost:8000/api/paymenthistory/${id}`,
        })
        .then((res)=>{
            const paymentHistory = res.data;
            dispatch(getPaymentHistorySuccess(paymentHistory))
        })
        .catch(error=>dispatch(getPaymentHistoryFailure(error)))
    }
}