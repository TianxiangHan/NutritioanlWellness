import React from "react";
import TeamMember from "./teamMember";
import teamMemberData from "../teamMemberData";
import SubHeading from "./subheading";
function Team(){
    function FetchingMembers(eachMember){
        return(
            <TeamMember 
            key={eachMember.id}
            aosDelayTime= {eachMember.aosDelayTime}
            teamImage={eachMember.teamImage} 
            memberName={eachMember.memberName} 
            memberPosition={eachMember.memberPosition} />
        );
    }
    return(
        <section id="team" class="team" data-aos="fade-up">
          <div class="container" >
            <SubHeading h2="Team" p="Our team is always here to help" />
              <div class="row">
                {teamMemberData.map(FetchingMembers)}
              </div>
          </div>
        </section>
    );
}
export default Team;