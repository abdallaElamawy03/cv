import React from "react";
import profile from "../Assets/ana.png";

class Profile extends React.Component{
  
  constructor(){
    super();
    
    this.state={displayBio:false}
    this.toggle=this.toggle.bind(this)
    

  }
  
  
  toggle(){
    if(this.state.displayBio){
      // this.state.displayBio=false
      this.setState({displayBio:false})

    }else{
      this.setState({displayBio:true})
    }
    
  }
  render(){
  
    
    
    return (
      
      <div>
        <img src={profile}className="profile" alt="profile" />
      <h1>مرحبا</h1>
      <p>I'm Abdalla 
         </p>
         
      {this.state.displayBio === true ? (
        <div>
        
        <p>i love reading , Learning new skills</p>
        <p>MyFav thing is to getting in  work </p>
        <button onClick={this.toggle}className="btn" > hide</button>
      </div>
      ):(
        <button onClick={this.toggle} className="btn">show more</button>

      ) }
      
      </div>


    )
      
      
    
  }
}
export default Profile

