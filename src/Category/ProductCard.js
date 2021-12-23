import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MUI_BackDrop from "../CommonComponents/Backdrop/Backdrop";

const RenderCard=({name, description, price, img, catName, id})=>{
    
    return(
        <div className="col-md-4 col-12">
            <div className="product">
                <div className="product_img">
                    <img src={`http://localhost:8000/${img}`} alt=""/>
                </div>
                <div className="product_heading d-flex justify-content-center">
                    <h3 className="pt-sans small-heading">{name}</h3>
                </div>
                <div className="product_para">
                    <p dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div className="product_price">
                    <h4 className="price">{`$${price}`}</h4>
                    <button><Link className="text-decoration-none text-light" to={`/categories/product/${id}`}>BUY NOW</Link></button>
                </div>
                <div className="product_categories">
                    <h5><i className="fa fa-bars"></i> {catName}</h5>
                    <ul>
                        <li><i className="s1 fa fa-star"></i></li>
                        <li><i className="s2 fa fa-star"></i></li>
                        <li><i className="s3 fa fa-star"></i></li>
                        <li><i className="s4 fa fa-star"></i></li>
                        <li><i className="s5 fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



const ProductCards=(props)=>{
    let productCards=null;
    const {shopProducts} = useSelector(state=>state.shop)
    const {loading} = useSelector(state=>state.shop)
    console.log(shopProducts)
    console.log(`selected category:${props.selectedCategory}`)
    if(shopProducts){
        productCards=shopProducts.map( value => {
            return(
                <RenderCard  key={value._id} id={value._id} img={value.img} name={value.name}
                description={value.description} price={value.price} catName={value.catName}/>
            )
        })
    }

    return(
        <div className="col-9 d-flex flex-wrap">
            {loading ? (<MUI_BackDrop loading={loading}/>):productCards}
        </div>
        
    )
}

export default ProductCards;