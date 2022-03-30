import React from "react";
function ServiceItem(props){
    return(
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div class="icon-box">
          <div class="icon"><i class={props.iClass}></i></div>
          <h4 class="title"><a href="">{props.h4}</a></h4>
          <p class="description">{props.p}</p>
        </div>
      </div>
    );
}
export default ServiceItem;