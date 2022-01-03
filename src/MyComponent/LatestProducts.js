import React from 'react';
import { Link } from 'react-router-dom';

const LatestProducts=()=>{
    return(
        <section className="latest_products">
            <div className="container">
                <div>
                    <h3 className="dispay-5 text-center pt-sans latest_products_heading"><span className="border-style">OUR LATEST ARRIVALS</span></h3>
                    
                    <p className="text-center pt-3">
                        Check our latest offers that just arrived to the store.
                        New
                        <Link className="text-decoration-none" to="pagenotfound">
                            <span> Nonummy </span>
                        </Link>
                        for you to wear.
                    </p>
                </div>
            </div>
      </section>
    )
}
export default LatestProducts;
