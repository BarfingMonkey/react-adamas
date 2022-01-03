import React from "react";
import ShopWithSidebar from "./ShopWithSidebar";
import Sidebar from "./Sidebar";
import '../assets/style.css'
import ProductCards from "./ProductCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/shop/shopAction";

const Category=()=>{
    let [selectedCategory,setSelectedCategory]= useState(null);
    let [pageNumber, setPageNumber]= useState(0)
    const dispatch= useDispatch();
    const {totalPages}= useSelector(state=>state.shop)
    const goToNext=()=>{
        setPageNumber(Math.min(totalPages-1,pageNumber+1) )
    }
    const goToPrevious=()=>{
        setPageNumber(Math.max(0,pageNumber-1) )
    }
    
    useEffect(() => {
        ClickCategory(selectedCategory)
    }, [pageNumber])

    const ClickCategory= async (id)=>{
        if(id!==selectedCategory){
            setPageNumber(0);
        }
        setSelectedCategory(id);
        console.log(`id: ${id}`)
        dispatch(fetchProduct(pageNumber,id))
    }
    const pages = new Array(totalPages).fill(null).map((v,i)=> i)
    console.log(`page number:${pageNumber+1}`)
    return(
        <div>
            <ShopWithSidebar/>
            <div className="container">
                <div className="row">
                    <Sidebar ClickCategory={(id)=>ClickCategory(id)}/>
                    <ProductCards selectedCategory={selectedCategory}/>
                    <div className="d-flex justify-content-center">
                        <button onClick={()=>goToPrevious()} dangerouslySetInnerHTML={{__html: "<"}}/>
                        {pages && pages.map((pageIndex)=>{
                            return(
                                <button key={pageIndex} className="m-1" onClick={()=> setPageNumber(pageIndex)}>{pageIndex+1}</button>
                            )
                        })}
                        <button onClick={()=>goToNext()} dangerouslySetInnerHTML={{__html: ">"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

   

export default Category;

// pageSize={countPerPage}
// onChange={updatePage}
// current={currentPage}
// total={allData.length}