import React from "react";
import img1 from "../Assets/design-1.png"
import COURSES from "../data/Course_data1";
const Courses=()=>{
    return (
        <div  >
            <h2 style={{textAlign:"center"}}>courses</h2>

        <div>
            {
                COURSES.map(COURSE => {
                    return <Course_1 key={COURSE.id}course={COURSE}/>
                })
            }
            
            
            </div>

        </div>
    )

}
const Course_1 = (props)=>{
    
    const {
        title,description,image,link
    }=props.course

    return (
      <div className="card">
        <img src={image} alt="courses" style={{width:"100%"}}></img>
        <h3 style={{color:"grey",fontSize:20}}>{title}</h3>
        <p style={{fontSize:17,padding:"4px"}}>{description}</p>
        <button onClick={()=>{
            window.location.href=link;
        }

        }>Click Me</button>
      </div>
            
          

    )
}
export default Courses