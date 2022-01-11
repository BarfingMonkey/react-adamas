import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Moment from 'react-moment';
import axios from 'axios';

const ViewPayment = () => {
    //const {paymentHistory} = useSelector(state=>state.paymentHistory)
    let location = useLocation();
    const {payment} = location.state;
    console.log('location:',location)

    useEffect(()=>{
        
    },[])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='d-flex justify-content-center mb-4'><h2>Payment Details</h2></div>
                    <h5 className='mb-2'>Date of purchase: <Moment format="DD MM YYYY">{payment.created_on}</Moment></h5>
                    <h5 className='mb-5'>Total: {payment.amount}</h5>
                    <table className='mb-3'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>QTY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payment.cartItems.map((cartItem, i)=>{
                                return <TableRow key={i} cartItem={cartItem}/>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div> 
        </>
    )
}
const TableRow=({cartItem})=>{
    return(
        <>
            <tr>
                <td><img src={`http://localhost:8000/${cartItem.productInfo.img}`} style={{width:"100px"}} alt="" /></td>
                <td>{cartItem.productInfo.name}</td>
                <td>${cartItem.productInfo.price}</td>
                <td>{cartItem.qty}</td>
            </tr>
        </>
    )
}
export default ViewPayment