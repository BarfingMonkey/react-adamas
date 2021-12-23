import React from 'react';

const Slider = () =>{
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="row">
                    <div className="carousel-item active">
                    
                        <img src="images\bg.png" className="d-block w-100 banner-bg " alt="..."/>
                    </div>
                    <div className="col-lg-6 rings_container">
                        <img src="images\rings.png" className="rings img-fluid d-block" alt="rings"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading_container d-flex align-items-center">
                        <h2 id="heading_text" className="pt-sans heading-font">
                            RINGS ON SALE
                        </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;