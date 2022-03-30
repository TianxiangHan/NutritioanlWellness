import React from "react";
import Subheading from "./subheading";
import ContactLabel from "./contactLabel";
import contactUsLabelData from "../contactUsLabelData";
import ContactUsForm from "./contactusForm";
function ContactUs(){
    const iframeStyle={
        border:0,
         width: "100%",
          height: "290px"
    }
    function FetchContactData(eachLabel){
        return(
                 <ContactLabel 
                     iClass= {eachLabel.contactUsLabelBootstrapIcon}
                     labelTitleClass={eachLabel.contactUsLabelClass}
                     labelTitle={eachLabel.contactUsLabelTitle}
                     labelContent={eachLabel.contactUsLabelContent}
                 />
        );
    }
    return(
        <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <Subheading h2="Contact Us" p="Contact us and get started" />
          
  
          <div class="row">
  
            <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="info">
              {contactUsLabelData.map(FetchContactData)}
                {/* <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
  
                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
  
                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div> */}
  
                <iframe 
                src="https://maps.google.com/maps?q=126%20Pavilion%20drive,%20mangere&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                style={iframeStyle} 
                allowFullScreen></iframe>
              </div>
  
            </div>
            <ContactUsForm />
 
            </div>
  
          </div>
  
       
      </section>
    );
}
export default ContactUs;