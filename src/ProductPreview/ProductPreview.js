import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/productpreview/productPreviewAction";
import { setCart } from "../redux/cart/cartAction"

const ProductPreview = ()=>{
    let {id:productId}= useParams();
    const dispatch= useDispatch();
    const {productPreview}= useSelector(state=>state.productPreview)
    const {_id:userId}= useSelector(state=>state.auth.data.user)
    let [qty, setQty]= useState(1)
    
    
    useEffect(async() => {
        dispatch(getProduct(productId))
    }, [])

    // useEffect(async() => {
    //     console.log(qty)
    //     console.log(productId)
    // }, [qty,productId])

    const handleChange=(e)=>{
        setQty(e.target.value)
    }
    const handleCart=()=>{
        dispatch(setCart({...productPreview,qty}))
    }
    return(
        <div className="container">
          {productPreview &&  <div className="row">
                <div className="col-sm-8">
                    <div className="img-container d-flex justify-content-center">
                       { productPreview.img &&  <img src={`http://localhost:8000/${productPreview.img}`} alt={productPreview.name} />}
                    </div>
                </div>
                <div className="col-sm-4">
                    <h4 className="small-heading">{productPreview.name}</h4>
                    <p className="my-4" dangerouslySetInnerHTML={{__html: productPreview.description}}/>
                    <div className="d-flex justify-content-between flex-wrap">
                        
                        <label>Qty:
                            <input  type="number" onChange={(e)=>handleChange(e)} min="1" value={qty} style={{width: "50px"}}/>
                        </label>
                        
                        <p>{`$${productPreview.price}`}</p> 
                        <button onClick={()=>handleCart()}>ADD TO CART</button>
                    </div>
                </div>
            </div>}
        </div>
    )
    
}

export default ProductPreview;