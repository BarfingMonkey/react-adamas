import React, { useEffect } from 'react';
import Slider from './Slider';
import SummerCollection from './SummerCollection';
import LatestProducts from './LatestProducts';
import ProductSection from './ProductSection';
import SocialMedia from './SocialMedia'
import 'font-awesome/css/font-awesome.min.css'
import FeaturedProducts from './FeaturedProducts';
import FeaturedProductSection from './FeaturedProductSection';
import axios from 'axios';

const Main =()=>{
    useEffect(() => {
        axios({
            method: "GET",
            url:'http://localhost:8000/api/user',
            withCredentials: true,
        })
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }, [])
    
    return(
        <div>
            <Slider/>
            <SummerCollection />
            <LatestProducts/>
            <ProductSection />
            <FeaturedProducts/>
            <FeaturedProductSection />
            <SocialMedia/>
        </div>
    )
}

export default Main;