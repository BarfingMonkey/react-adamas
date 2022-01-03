
import React from "react";
import BottomFooter from "./BottomFooter";
import UpperFooter from "./UpperFooter";

class FooterComponent extends React.Component{
    render(){
        return(
            <footer className='pt-5'>
                <UpperFooter/>
                <BottomFooter/>
            </footer>
        )
    }
}
export default FooterComponent;