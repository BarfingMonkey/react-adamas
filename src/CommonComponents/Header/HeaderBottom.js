import { Link } from "react-router-dom";

const HeaderBottom=(props)=>{
    return(
        <div className="header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <strong className="logo d-inline-block">
                <Link to="/" className="d-inline-block">
                    <img src="\images\logo_header.png" className="img-fluid" alt="logo img"/>
                </Link>
              </strong>
            </div>

            <div className="col-9 d-flex justify-content-end">
              <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      <Link className="nav-link active" aria-current="page" to="pagenotfound">Apparel</Link>
                      <Link className="nav-link active" aria-current="page" to="pagenotfound">Fashion</Link>
                      <Link className="nav-link active" aria-current="page" to="pagenotfound">News</Link>
                      <Link className="nav-link active" aria-current="page" to="pagenotfound">Portfolio</Link>
                      <Link className="nav-link active" aria-current="page" to="pagenotfound">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
            
        </div>
        </div>
      </div>
    )
}
export default HeaderBottom;