import React from "react";
import PicItems from "./portfolio-item";
import PicData from "../picData";
import List from "./portfollio-list";
import SubHeading from "./subheading";

function Portfolio (){
    function CreatePic(picDetails) {
        return (
          <PicItems
            key={picDetails.id}
            picPath={picDetails.picPath}
            picCatNo={picDetails.picCatNo}
            picCat={picDetails.picCat}
            
          />
        );
      }

    return(
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade-up">
  
                <SubHeading h2="Portfolio" p="Check out our beautifull portfolio"/> 
                
                
                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                {/* Mapping through the PicData and return to the <PicItems/>  */}
                    {PicData.map(CreatePic)}  
                    
                </div>
                
            </div>
      </section>
    );
}
export default Portfolio;