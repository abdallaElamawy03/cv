import React from "react";
import Social_profiles from "../data/socialProfile"
import { Link } from "react-router-dom";
// import Profile from "./Profile";
class Socialprofiles extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h3 >contact me</h3>

                    {
                        Social_profiles.map(Social_1 =>{
                            return<Social_12 key={Social_1.id}socialprofile={Social_1}/>
                        })
                    }
                
                    
                
            </div>
        )
    }
}
class Social_12 extends React.Component{
    render(){
        const {image,link}=this.props.socialprofile;
        return(
            <div style={{display:"inline-block"}}>
                <Link to= {link}>
                <img src={image} alt="socila img" style={{width:20,margin:5}}>
             
                </img>
                </Link>
            
            </div>
        )
    }
}
export default Socialprofiles