import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts=()=>{
    return(
        <section className="latest_products">
            <div className="container">
                <div>
                    <h3 className="dispay-5 text-center pt-sans latest_products_heading">
                        <span className="border-style">OUR FEATURED PRODUCTS</span>
                    </h3>
                    <p className="text-center pt-3">
                        Check our featured product offers that just arrived to the store.
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
export default FeaturedProducts;
