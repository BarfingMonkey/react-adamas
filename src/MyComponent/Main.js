import React from 'react';
import Slider from './Slider';
import SummerCollection from './SummerCollection';
import LatestProducts from './LatestProducts';
import ProductSection from './ProductSection';
import SocialMedia from './SocialMedia'
import 'font-awesome/css/font-awesome.min.css'
import FeaturedProducts from './FeaturedProducts';
import FeaturedProductSection from './FeaturedProductSection';

class Main extends React.Component{
    
    render(){
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
}

export default Main;