import React, { useEffect } from 'react';
import Slider from './Slider';
import SummerCollection from './SummerCollection';
import LatestProducts from './LatestProducts';
import ProductSection from './ProductSection';
import SocialMedia from './SocialMedia'
import 'font-awesome/css/font-awesome.min.css'
import FeaturedProducts from './FeaturedProducts';
import FeaturedProductSection from './FeaturedProductSection';
import { useDispatch } from 'react-redux';
import { googleSignup } from '../redux/auth/authActions';



const Main =()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(googleSignup())
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