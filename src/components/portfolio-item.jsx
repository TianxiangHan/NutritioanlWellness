import React from "react";


function Items(props){
  
    return(
        
          
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
                <img src={props.picPath} class="img-fluid" alt=""/>
                <div class="portfolio-links">
                  {/* <a href={props.picPath} data-gallery="portfolioGallery" className="portfolio-lightbox" title={props.picCatNo}><i class="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a> */}
                </div>

                
                <div class="portfolio-info">
                  <h4>{props.picCatNo}</h4>
                  <p>{props.picCat}</p>
                </div>
              </div>
          </div>
        
        
         
        
        
    );
}
export default Items;