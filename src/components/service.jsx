import React from "react";
import SubHeading from "./subheading";
import ServiceItem from "./serviceItem";
function Service(){
    return(
        <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">
  
          
          <SubHeading h2="Services" p="Check out the great services we offer"/>
  
          <div class="row">
            <ServiceItem h4="Lorem Ipsum" 
            p="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" 
            iClass="bx bxl-dribbble"
            />
            

            <ServiceItem h4="Sed ut perspiciatis" 
            p="uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" 
            iClass="bx bx-file"
            />
  
           
            <ServiceItem h4="Magni Dolores" 
            p="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim" 
            iClass="bx bx-tachometer"
            />
            
            <ServiceItem h4="Nemo Enim" 
            p="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum" 
            iClass="bx bx-world"
            />
  
            
  
          </div>
  
        </div>
      </section>
    );
}
export default Service;