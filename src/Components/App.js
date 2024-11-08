import React from "react";
import Profile from "./Profile"
import Qualifactions from "./Qualifactions";
import "../index.css"
import Courses from "./Courses";
import Socialprofiles from "./Socialprofiles";
import Title_1 from "./Title"
import Header from "./Header";
import Titlewithhooks from "./Titlewithhooks";
class App extends React.Component{
  constructor(){
    super();
    
    

  }
  
 
  render(){
    

    return (

      <div>
        

      <div className="row">
        <Title_1/>
        <div className="column">

        <Profile/>
        
        </div>
        <div className="column">

        <Qualifactions/>
        </div>
      </div>
      <hr/>
      <Courses/>
      <hr>
      </hr>
      <Socialprofiles/>
      <hr></hr>
      <Titlewithhooks></Titlewithhooks>
      
      

      </div>

    )
      
      
    
  }
}

export default App

