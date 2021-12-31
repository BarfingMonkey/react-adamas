import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import SummerCollection from './SummerCollection';
import LatestProducts from './LatestProducts';
import ProductSection from './ProductSection';
import SocialMedia from './SocialMedia'
import 'font-awesome/css/font-awesome.min.css'
import FeaturedProducts from './FeaturedProducts';
import FeaturedProductSection from './FeaturedProductSection';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignup } from '../redux/auth/authActions';
import { getCart } from '../redux/cart/cartAction';




const Main =()=>{
    const dispatch = useDispatch()
    let [userId,setUserId]=useState(useSelector(state=>state.auth.data?.user._id))

    useEffect(() => {
        console.log('userId',userId)
        dispatch(getCart(userId))
    }, [userId])
    
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