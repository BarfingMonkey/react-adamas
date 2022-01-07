import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPaymentHistory } from '../redux/paymenthistory/paymentHistoryAction'

const PaymentHistory = () => {
    const {paymentHistory} = useSelector(state=>state.paymentHistory)
    let {userId}=useSelector(state=>state.auth.data.user._id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPaymentHistory(userId))
    }, [])

    return (
        <>
            {paymentHistory && paymentHistory.map((payment, i)=>{
                return <TableRow key={i} payment={payment}/>;
            })}
            
        </>
    )
}

const TableRow=({payment})=>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src={`http://localhost:8000/${payment.productInfo.img}`} style={{width:"100px"}} alt="" /></td>
                    <td>{payment.productInfo.name}</td>
                    <td>{payment.productInfo.price}</td>
                    <td><input  type="number" onBlur={(e)=>handleChange(e)} min="1" defaultValue={qty} style={{width: "50px"}}/></td>
                    <td><Button onClick={()=>handleDelete()}>Delete</Button></td>
                </tr>
                </tbody>
            </table>
            
        </>
    )
}
export default PaymentHistory
