import React from 'react';
import { Link } from 'react-router-dom';

const ShopWithSidebar=()=>{
    return(
        <div className="breadcrumb-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-12">
                        <h1 className="text-white">Shop with a Sidebar on left</h1>
                        <div aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item "><a className="text-white" href="#">Home <i
                                            className="fa fa-angle-double-right fa-sm"></i></a></li>
                                <li className="breadcrumb-item text-white" aria-current="page">Shop with Sidebar</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 ">
                        <div className="row float-md-end float-sm-none">
                            <div className="col-md-2 col-12 float-end">
                                <span className="mobile-font "><i className="fa fa-mobile fa-lg text-white"></i></span>
                            </div>
                            <div className="col-md-10 col-12 p-2">
                                <h3 className="text-white mb-0">+565 975 658</h3>
                                <p className="text-white mb-0 ps-3">Monday-Friday, 8:00-20:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopWithSidebar;