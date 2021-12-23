import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getCollection} from "../redux/collection/collectionAction";
import { useEffect } from "react";
import MUI_BackDrop from "../CommonComponents/Backdrop/Backdrop";

function RenderCollectionCard({name, description, img, }){
    
    return( 
        <div className="m-2">
            <div className="cards">
                <div className="product-img-container">
                    <img src={`http://localhost:8000/${img}`} className="card-img-top product-img" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center pt-sans small-heading">{name}</h5>
                    <p className="card-text text-center pb-3" dangerouslySetInnerHTML={{__html: description}}/>
                    <div className="d-flex justify-content-center">
                    <button className="product_button">
                        <Link className="text-decoration-none text-light" to="categories">Visit The Store</Link>
                    </button>
                    </div>
                </div>  
            </div>    
        </div>
    )
}
const SummerCollection = () =>{
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getCollection())
    }, [])
    
    const {categories}= useSelector(state=>state.categories)
    const {loading}= useSelector(state=>state.categories)
    let summerCards=null;
    if(categories){
        summerCards= categories.map((items)=>{
            return(
                <RenderCollectionCard key={items._id} img={items.img}
                name={items.name} description={items.description} />
            );
        });
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      };
    return(
        <div className="collection py-5">
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                        {loading ? (<MUI_BackDrop loading={loading}/>):summerCards}
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SummerCollection;