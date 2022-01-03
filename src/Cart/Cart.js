import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, setCart, updateCart} from '../redux/cart/cartAction';
import {
    Button,
} from 'react-bootstrap';


const Cart=()=> {
    const {cart}= useSelector(state=>state.cart)
    let [total, setTotal]= useState(0)
    let totalBill = 0
    let userId=useSelector(state=>state.auth.data?.user._id)
    const dispatch= useDispatch();

    useEffect(()=>{
        for(let cartItem of cart){
            console.log('qty',cartItem.qty,'price', cartItem.price, 'total', totalBill)
            totalBill = totalBill + (parseInt(cartItem.qty) * parseInt(cartItem.price))
        }
        setTotal(totalBill)
        console.log(total)
    }, [cart])
    
    
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
                        {cart && cart.map((cartItem, i)=>{
                            return <TableRow key={i} cartItem={cartItem}/>;
                        })}
                        {/* <tr className='d-flex justify-content-center w-100'>
                            <td>
                                
                            </td>
                        </tr> */}
                    </tbody>
                </table>
                <div className='d-flex justify-content-center '>
                    <Button >Proceed to Check Out    (${`${total}`})</Button>
                </div>
                
            </div>
            
        </div>
    )
}
const TableRow=({cartItem})=>{
    let [qty, setQty] = useState(cartItem.qty)
    const dispatch= useDispatch();
    
    useEffect(()=>{
        console.log(qty)
        dispatch(updateCart(cartItem, qty))
    },[qty])
    
    const handleChange=(e)=>{
        setQty(e.target.value)
    }
    
    const handleDelete=()=>{
        dispatch(deleteCart(cartItem))
    }

    return(
        <>
            <tr>
                <td><img src={`http://localhost:8000/${cartItem.img}`} style={{width:"100px"}} alt="" /></td>
                <td>{cartItem.name}</td>
                <td>{cartItem.price}</td>
                <td><input  type="number" onChange={(e)=>handleChange(e)} min="1" value={qty} style={{width: "50px"}}/></td>
                <td><Button onClick={()=>handleDelete()}>Delete</Button></td>
            </tr>
        </>
    )
}

export default Cart
