import { useState ,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authActions";

const HeaderTop= (prop)=>{
  const navigate=useNavigate();
  const {isLoggedIn} = useSelector(state=>state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [])
  
    return(
        <div className="header-top">
        <div className="header-top-background">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 d-flex py-1 col-sm-12 justify-content-sm-start justify-content-xl-start">
                <ul className="d-flex list-unstyled my-auto flex-wrap flex-lg-nowrap">
                  <li ><Link to="pagenotfound" className="text-decoration-none text-light"><i className="fa fa-mobile text-light px-2 fa-1x"></i>+565 975 658</Link></li>
                  <li ><Link className="text-decoration-none text-light"to="pagenotfound"><i className="fa fa-envelope text-light px-2"></i>info@premiumcoding.com</Link></li>
                  <li ><Link className="text-decoration-none text-light"to="pagenotfound"><i className="fa fa-clock-o text-light px-2"></i>Monday - Friday, 8.00 - 20.00</Link></li>
              </ul>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end justify-content-sm-start  py-1 col-sm-12">
                <ul className="d-flex list-unstyled align-items-center my-auto">
                  {isLoggedIn ? 
                  ( <>
                      <li><Link className="text-decoration-none text-light slash" to="pagenotfound">YOUR CART (0)</Link></li>
                      <li><button className="text-decoration-none text-light log-out-button"  onClick={()=>dispatch(logout()).then(()=>console.log('callback'))}> LOG OUT</button></li>
                    </>
                  )
                  :
                  (
                  <>
                    <li><Link className="text-decoration-none text-light slash" to="login" >LOG IN </Link></li>
                    <li><Link className="text-decoration-none text-light " to="signup"> REGISTER</Link></li>
                  </>
                  )}
                  
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default HeaderTop;

