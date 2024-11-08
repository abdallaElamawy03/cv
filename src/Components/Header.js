import React from "react";
import { Link } from "react-router-dom";
import App from "./App";
import Amthal from "./Amthal";
const Header =()=>{
    const style = {display:"inline-block",margin:10,marginBottom:30}
    return (
        <div>
            <div>
                <h3 style={style}>
                    <Link to="/">Home</Link>
                </h3>
                <h3 style={style}>
                    <Link to="/Amthal">AMthal</Link>
                </h3>
                <h3 style={style}>
                    <Link to="/Gallery">Gallery</Link>
                </h3>
                
            </div>
        </div>
    )
}
export default Header