import React from "react";
function About(){
    return(
        <section id="about" class="about">
        <div class="container">
  
          <div class="row justify-content-between">
            <div class="col-lg-4 d-flex  align-items-center justify-content-center about-img">
            <iframe width="420" height="345" alt="" data-aos="zoom-in" src="https://www.youtube.com/embed/Vl5L_qG2umk">
             </iframe>
            </div>
            <div class="col-lg-4 d-flex  align-items-center justify-content-center about-img" >
            <iframe width="420" height="345" alt="" data-aos="zoom-in" src="https://www.youtube.com/embed/VnZ_FmtsiuA">
             </iframe>
            </div>
            
             
              
            
            <div class="col-lg-4 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">About Nutritional Wellness</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <div class="row">
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    //   <!-- End About Section -->
    );
}
export default About;