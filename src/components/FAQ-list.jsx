import React from "react";
function FAQList(props){
    const [show, setShow]=React.useState(false);

    return(
        <li>
              <div data-bs-toggle="collapse"  class="collapsed question" href={props.href}>{props.question} <i onClick={()=>setShow(!show)} class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
              {/* to use the bootstrap collapse for <p>, but is not working in react map() */}
              {/* <div id={props.id} class="collapse" data-bs-parent=".faq-list">  */}
                
                <p  style={show?{display:"block"}:{display:"none"}}  >
                  abbc{props.answer}
                </p>
                
                
              {/* </div> */}
            </li>
    );
}

export default FAQList;