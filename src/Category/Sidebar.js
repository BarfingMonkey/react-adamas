import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCollection} from "../redux/collection/collectionAction";

function RenderCategoryList(props){
    return(
        <>
            <li className="catagory-items"><button className="" onClick={(id)=>props.ClickCategory(props.id)}>{props.name}</button></li>
        </>
    )
}

const Sidebar=(props)=>{
    let categoryCards = null;
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getCollection())
    }, [])

    const {categories}= useSelector(state=>state.categories)
    console.log(categories)
    if(categories){
        categoryCards= categories.map((category)=>{
            return(
                <RenderCategoryList key={category._id} name={category.name} id={category._id} ClickCategory={(id)=>props.ClickCategory(id)}/>
            )
        })
    }
    return(
        
        <div className="col-md-3 col-12">
            <div className="Catagory-content">
                <h3>Catagories</h3>
                <ul className="catagories p-0">
                    <li className="catagory-items"><button onClick={()=>props.ClickCategory()}>All</button></li>
                    {categoryCards}
                </ul>
            </div>
            <div className="card-content">
                <div className="row">
                    <div className="col-md-6 col-12 ">
                        <h5>Best Sellers</h5>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="float-end">
                            <span className="previous"><i className="fa fa-angle-left"></i></span>
                            <span className="next"><i className="fa fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="slicker-item">
                        <div className="card">

                            <div> <img src="/images/bluediamond_normal.jpg" className="card-img-top"
                                    alt="image of ring"/></div>
                            <div className="card-body">
                                <h6 className="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                        <div className="card">

                            <div> <img src="/images/bluediamond_normal.jpg" className="card-img-top"
                                    alt="image of ring"/></div>
                            <div className="card-body">
                                <h6 className="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>
                        <div className="card">

                            <div> <img src="/images/bluediamond_normal.jpg" className="card-img-top"
                                    alt="image of ring"/></div>
                            <div className="card-body">
                                <h6 className="card-title ps-3">Silver Ring with a Diamond</h6>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="price-content">
                <h5>Price Range</h5>
                <ul className="p-0">
                    <li>
                        <h6>$5.00 - $50.00</h6>
                    </li>
                    <li>
                        <h6>$50.00 - $100.00</h6>
                    </li>
                    <li>
                        <h6>$100.00 - $200.00</h6>
                    </li>
                    <li>
                        <h6>$200.00 - $500.00</h6>
                    </li>
                </ul>
            </div>
            <div className="Recent-product-content">
                <div className="row">
                    <h4>Recent Products</h4>
                </div>
                <div className="row pt-3">
                    <div className="col-5">
                        <div className="image-resize">
                            <img src="images/bluediamond_short.jpg" className="img-fluid"
                                alt="image of ring"/>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="list-inline-item">
                            <h6>Blue Sky Diamond</h6>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star not-checked"></span>
                            <span className="price-hover">$546.78</span>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-5">
                        <div className="image-resize">
                            <img src="images/redRing_short.jpg" className="img-fluid" alt="image of ring"/>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="list-inline-item">
                            <h6>Flery Red Ring</h6>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star not-checked"></span>
                            <span className="price-hover">$2789.78</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Sidebar;