import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

export const RenderProductCard=({name, description, price, img})=>{
    return(
        <div className="">
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
                    <button><Link className="text-decoration-none text-light" to="pagenotfound">BUY NOW</Link></button>
                </div>
                <div className="product_categories">
                    <h5><i className="fa fa-bars"></i> Categories</h5>
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
const FeaturedProductSection=(props)=>{
    let productCards
    const {products}= useSelector(state=>state.products)

    console.log(props.ProductCards)
    if(products && products!==undefined){
        productCards= products.filter((product)=> product.status===true).map((items)=>{
            return(
                
                <RenderProductCard key={items._id} img={items.img} name={items.name}
                description={items.description} price={items.price}
                />
            )
        })
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };
    return(
        <section className="product_section_bg">
            <div className="container ">
                <div className="row">
                    <Slider {...settings}>
                        {productCards}
                    </Slider>
                    
                </div>
            </div>
        </section>
    );
}



export default FeaturedProductSection;