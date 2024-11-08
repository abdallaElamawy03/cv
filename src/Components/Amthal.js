// import React from "react";
// import { json } from "react-router";
// import title from "./Title";
// class Amthal extends React.Component{
    
    
//     constructor(){
        
//         super();
//         this.state={mathal:{},amthal:[]};
//         this.fetchamthal=this.fetchamthal.bind(this)
       

        
//     }
//     componentDidMount(){
//         fetch("http://localhost:3005/amthal/random")
//         .then(response => 
//              response.json()
//         )
//         .then(json => this.setState({mathal:json}))



//         }

//         fetchamthal(){
//             fetch("http://localhost:3005/amthal/ten")
//         .then(response => 
//              response.json()
//         )
//         .then(json => this.setState({amthal:json}))
//         }
//     render(){
//         return(
//             <div>

//             <h2> مثل اليوم </h2>
//             <p>{this.state.mathal.title}</p>
//             <hr></hr>
//             <h3>هل تريد المزيد من الامثال ؟ </h3>
//             <button className="btn" onClick={this.fetchamthal}>امثال</button>
//             {
//                 this.state.amthal.map(mathal => {
//                     return <p>{mathal.title}</p>
                
                
//                 }
                
                
//             )
            
//             }
            
//             </div>
            

//         )
//     }
// }
// export default Amthal
import React, { useState, useEffect } from 'react';
import { json } from 'react-router';
import title from './Title';

const Amthal = () => {
  const [mathal, setMathal] = useState({}); // State for the random amthal
  const [amthalList, setAmthalList] = useState([]); // State for a list of amthal

  const fetchRandomAmthal = async () => {
    try {
      const response = await fetch('http://localhost:3005/amthal/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setMathal(json);
    } catch (error) {
      console.error('Error fetching random amthal:', error);
      // Optionally handle errors by displaying a message or retrying
    }
  };

  const fetchTenAmthal = async () => {
    try {
      const response = await fetch('http://localhost:3005/amthal/ten');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setAmthalList(json);
    } catch (error) {
      console.error('Error fetching ten amthal:', error);
      // Optionally handle errors by displaying a message or retrying
    }
  };

  useEffect(() => {
    fetchRandomAmthal();
  }, []);
      // Empty dependency array ensures fetching on initial render only
      const hide_click=()=>{
        setAmthalList([])


      }


  return (
    <div>
      <h2>مثل اليوم</h2>
      <p>{mathal.title}</p>
      <hr />
      <h3>هل تريد المزيد من الامثال ؟</h3>
      <button className="btn" onClick={fetchTenAmthal}>امثال</button>
      {amthalList.length > 0 && (
        <>
        {
           amthalList.map(amthal=>{
            return <p>{amthal.title}</p>
           })
            
        }
        <button className='btn' onClick={hide_click} >hide</button>
        
        </>
        
      )}
      
    </div>
  );
}


export default Amthal;
