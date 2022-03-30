import React from "react";
function ContactLabel(props){
    return(
        <div class={props.labelTitleClass}>
        <i class={props.iClass}></i>
        <h4>{props.labelTitle}</h4>
        <p>{props.labelContent}</p>
      </div>
    );
}
export default ContactLabel;