import React from "react";
function TeamMember(props){
    return(
        <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={props.aosDelayTime}>
        <div class="member">
          <img src={props.teamImage} class="img-fluid" alt=""/>
          <div class="member-info">
            <div class="member-info-content">
              <h4>{props.memberName}</h4>
              <span>{props.memberPosition}</span>
            </div>
            <div class="social">
              {/* <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a> */}
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default TeamMember;