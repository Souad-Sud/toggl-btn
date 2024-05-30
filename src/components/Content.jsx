import React from "react";
import Img from '../../public/img/thumb-1429327_640.png'

const Content = () =>{
    return(
        <div>
            <h1>Good work</h1>
            {/* regular syntaxt */}
            {/* <img src="img/thumb-1429327_640.png" alt="" /> */}
            <img src={Img} alt="" />



        </div>
    )
}

export default Content