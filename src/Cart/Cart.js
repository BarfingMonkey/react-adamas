import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, putCart } from '../redux/cart/cartAction';
import {
    Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart=()=> {
    const {cartItems}= useSelector(state=>state.cart)
    const {total} = useSelector(state=>state.cart)
    let {isLoggedIn}=useSelector(state=>state.auth)
    console.log('login: ',isLoggedIn)
    const navigate = useNavigate();
    const dispatch= useDispatch();

    useEffect(()=>{
        if(!isLoggedIn){
            navigate('/login')
        }
    }, [cartItems])
    console.log(cartItems.length)
    return (
        <div className='container'>
            <div className="row">
                {cartItems.length>0 ?
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
                                {cartItems && cartItems.map((cartItem, i)=>{
                                    return <TableRow key={i} cartItem={cartItem}/>;
                                })}
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-center'>
                            <Button onClick={()=>navigate('/payment')}>Proceed to Check Out    (${`${total}`})</Button>
                        </div>
                    </>
                : 
                    <div className='d-flex justify-content-center'><h2>Your Cart is empty</h2></div>
                }
            </div>
            
        </div>
    )
}
const TableRow=({cartItem})=>{
    let [qty, setQty] = useState(cartItem.qty)
    let {loading}=useSelector(state=>state.cart)

    const dispatch= useDispatch();
    useEffect(()=>{
        const formdata= new FormData();
        formdata.append('qty', qty);
        console.log(qty)
        if(!loading){
            dispatch(putCart(formdata,cartItem._id))
        }
    },[qty])
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
                <td><input  type="number" onBlur={(e)=>handleChange(e)} min="1" defaultValue={qty} style={{width: "50px"}}/></td>
                <td><Button onClick={()=>handleDelete()}>Delete</Button></td>
            </tr>
        </>
    )
}

export default Cart
