import React from "react";
import Images from "../data/Images_1";

import Imageshadow from "react-image-shadow"
import "react-image-shadow/assets/index.css"

const Gallery=()=>{

    return(
        <div>
            {Images.map(imagesobj=>{
                return <Image src={imagesobj.image}desc={imagesobj.description}/>
            })}
        </div>
        
        
        
        


    )
}
const Image=({src,desc})=>{
    
    return(
        <div className="gallery">
            <a target="_blank" href={src}>  <Imageshadow src={src}/></a>
        <p>{desc}</p>
        </div>
    )
}
export default Gallery