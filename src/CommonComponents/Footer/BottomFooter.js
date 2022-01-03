import { Link } from "react-router-dom";

const BottomFooter= (props)=>{
    return(
        <div className="footer_nav_bg py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start">
              <nav className="footer_nav">
                <ul className="footer_nav_links d-flex list-unstyled">
                  <li className="px-1"><Link className="text-decoration-none text-light" to="pagenotfound" >Home</Link></li>
                  <li className="px-1"><Link className="text-decoration-none text-light"to="pagenotfound">Portfolio</Link></li>
                  <li className="px-1"><Link className="text-decoration-none text-light"to="pagenotfound">Sitemap</Link></li>
                  <li className="px-1"><Link className="text-decoration-none text-light"to="pagenotfound">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-8 d-flex justify-content-md-end justify-content-center">
              <p className="text-light">Adamas @ 2013 by PremiumCoding | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BottomFooter;