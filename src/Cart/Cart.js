import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, putCart } from '../redux/cart/cartAction';
import {
    Button,
} from 'react-bootstrap';


const Cart=()=> {
    const {cartItems}= useSelector(state=>state.cart)
    let userId=useSelector(state=>state.auth.data?.user._id)
    const dispatch= useDispatch();
    
    return (
        <div className='container'>
            <div className="row">
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
                        {cartItems && cartItems.map((cartItem, i)=>{
                            return <TableRow key={i} cartItem={cartItem}/>;
                        })}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
const TableRow=({cartItem})=>{
    let [qty, setQty] = useState(cartItem.qty)
    const dispatch= useDispatch();
    useEffect(()=>{
        const formdata= new FormData();
        formdata.append('qty', qty);
        console.log('formdata', formdata)
        console.log(qty)
        //dispatch(putCart(formdata,cartItem._id))
    },[])
    const handleChange=(e)=>{
        setQty(e.target.value)
    }
    const handleDelete=()=>{
        dispatch(deleteCart(cartItem._id))
    }

    return(
        <>
            <tr>
                <td><img src={`http://localhost:8000/${cartItem.productInfo.img}`} style={{width:"100px"}} alt="" /></td>
                
                <td>{cartItem.productInfo.name}</td>
                <td>{cartItem.productInfo.price}</td>
                <td><input  type="number" onChange={(e)=>handleChange(e)} min="1" value={qty} style={{width: "50px"}}/></td>
                <td><Button onClick={()=>handleDelete()}>Delete</Button></td>
            </tr>
        </>
    )
}

export default Cart
