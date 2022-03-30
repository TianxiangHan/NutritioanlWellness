import React from "react";
function SubHeading (props){
 return(
    <div className="section-title" data-aos="fade-up" data-aos-delay="100">
       <h2>{props.h2}</h2>
       <p>{props.p}</p>
    </div>
    
 );
}
export default SubHeading;