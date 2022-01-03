import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia=(props)=>{
    return(
        <section className="social_media py-3">
            <div className="container">
            <div className="row">
                <div className="col d-md-flex justify-content-md-between">
                <div className="social_media_left">
                    <div className="twitter_icon"><i className="fa fa-twitter fa-4x"></i></div>
                    <div>
                        <p>Revenant was just released on #themeforest <span ><Link className="text-decoration-none" id="link" to="pagenotfound">http://bit.ly/qoXj6m</Link></span></p> 
                    </div>
                </div>
                <div className="social_media_right">
                    <div>
                        <p>Check the latest news on our Social Networks:</p>
                    </div>
                    <div className="social_media_links">
                        <ul>
                            <li><Link to="pagenotfound"><i className="fa fa-rss style_icons"></i></Link></li>
                            <li><Link to="pagenotfound"><i className="fa fa-pinterest-p style_icons"></i></Link></li>
                            <li><Link to="pagenotfound"><i className="fa fa-facebook style_icons"></i></Link></li>
                            <li><Link to="pagenotfound"><i className="fa fa-dribbble style_icons"></i></Link></li>
                            <li><Link to="pagenotfound"><i className="fa fa-dribbble style_icons"></i></Link></li>
                        </ul>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </section>
    )
}
export default SocialMedia;