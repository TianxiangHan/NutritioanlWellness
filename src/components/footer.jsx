import React from "react";
function Footer(){
    
    return(
        <footer id="footer"> 
        <div class="container py-4">
        <div class="copyright">
           Copyright {new Date().getFullYear()} <strong><span>Nutritional Wellness</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
         
          Inplemented by <a href="https://reactjs.org/">React</a>
        </div>
      </div>
     </footer>
    );
}
export default Footer;