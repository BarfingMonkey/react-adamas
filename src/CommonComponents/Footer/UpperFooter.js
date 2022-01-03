import { Link } from "react-router-dom";

const UpperFooter =(props)=>{
    return(
        <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 pb-3">
            <div className="footer_logo_container">
              <div className="footer_logo">
                <strong className="logo d-inline-block">
                  <Link to="pagenotfound" className="d-inline-block">
                      <img src="images\logo_footer.png" alt="logo img"/>
                  </Link>
                </strong>
              </div>
              <div>
                  <p>
                      Lorem ipsum dolor sit amet, consec
                      tetuer adipiscing elit, sed diam non
                      ummy nibh euismod tincidunt ut lao
                      reet dolore magna aliquam erat 
                      volutpat.
                  </p>
              </div>
          </div>
          </div>
          <div className="col-lg-3 col-sm-6 pb-3">
            <div className="recent_products">
              <h3 className="footer_heading pt-sans small-heading">Recent Products</h3>
              <div className="upper_product">
                  <div className="product_img_container">
                      <img className="footer_product_img" src="Images\f.1.png" alt=""/>
                  </div>
                  <div className="product_description">
                      <h5 className="pt-sans small-heading">Blue Sky Diamond</h5>
                      <div className="rating d-flex justify-content-start">
                          <ul>
                              <li><i className="s1 fa fa-star"></i></li>
                              <li><i className="s2 fa fa-star"></i></li>
                              <li><i className="s3 fa fa-star"></i></li>
                              <li><i className="s4 fa fa-star"></i></li>
                              <li><i className="s5 fa fa-star"></i></li>
                          </ul>
                      </div>
                      <p className="price">$589.99</p>
                  </div>
              </div>
              <div className="bottom_product">
                  <div className="product_img_container">
                      <img className="footer_product_img" src="Images\f.2.png" alt=""/>
                  </div>
                  <div className="product_description">
                      <h5 className="pt-sans small-heading">Blue Sky Diamond</h5>
                      <div className="rating">
                          <ul>
                              <li><i className="s1 fa fa-star"></i></li>
                              <li><i className="s2 fa fa-star"></i></li>
                              <li><i className="s3 fa fa-star"></i></li>
                              <li><i className="s4 fa fa-star"></i></li>
                              <li><i className="s5 fa fa-star"></i></li>
                          </ul>
                      </div>
                      <p className="price">$589.99</p>
                  </div>
              </div>
          </div>
          </div>
          <div className="col-lg-3 col-sm-6 pb-3">
            <div className="contacts">
              <h3 className="footer_heading pt-sans small-heading">Contacts</h3>
              <div className="address_container">
                  <address>
                      Adamas d.o.o., 1000 Ljubljana
                      Celovska cesta 135
                      Slovenia, Europe
                  </address>
              </div>
              <div className="numbers_container">
                  <dl>
                      <Link to="pagenotfound" className="list-unstyled text-decoration-none text-dark">Phone: (+386) 40 123 456</Link> 
                  </dl>
                  <dl>
                      <Link to="pagenotfound"className="list-unstyled text-decoration-none text-dark">Mobile: (+386) 40 654 123 651</Link> 
                  </dl>
              </div>

              <div className="email">
                <Link className="text-decoration-none text-dark" to="pagenotfound"><p>Email: <span>info@premiumcoding.com</span></p></Link>
              </div>

          </div>
          </div>
          <div className="col-lg-3 col-sm-6 pb-3">
            <div className="newsletter">
              <h3 className="footer_heading pt-sans small-heading">Sign to Newsletter</h3>
              <div className="input_name_container">
                  <input required className="input_style" type="text" name="name" id="name" placeholder="Name"/>
              </div>
              <div className="input_email_container">
                  <input required className="input_style" type="text" name="name" id="email" placeholder="Email"/>
              </div>
              <div className="button_container">
                  <button className="subscribe">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}

export default UpperFooter;