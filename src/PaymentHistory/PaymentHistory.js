import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPaymentHistory } from '../redux/paymenthistory/paymentHistoryAction'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const PaymentHistory = () => {
    const {paymentHistory} = useSelector(state=>state.paymentHistory)
    let userId=useSelector(state=>state.auth.data.user._id)
    console.log('userId: ',userId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPaymentHistory(userId))
    }, [])

    return (
        <>
            {paymentHistory.length>0 ?
            (
                <>
                    <div className='d-flex justify-content-center mb-4'><h2>Your Payment History</h2></div>
                    {paymentHistory && paymentHistory.map((payment, i)=>{
                        return <TableRow key={i} payment={payment}/>;
                    })}
                </>
            ) 
            : (
                <div className='d-flex justify-content-center mb-4'><h2>No payment history</h2></div>
            )}
            
        </>
    )
}

const TableRow=(prop)=>{
    const [payment, setPayment] = useState(prop.payment)
    useEffect(() => {
        console.log('payment state: ', payment)
    }, [payment])
    return(
        <>
            <div className="container">
                <div className="row">
                    <table className='mb-4'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Total Items</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Moment format="DD MM YYYY">{payment.created_on}</Moment></td>
                            <td>${payment.amount}</td>
                            <td>{payment.cartItems.length}</td>
                            <td>
                                <Link to='/viewpayment' state={{payment: prop.payment}}>
                                    View Details
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
            
        </>
    )
}
export default PaymentHistory
