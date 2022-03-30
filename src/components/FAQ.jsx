import React from "react";
import FAQList from "./FAQ-list";
import FAQData from "../FAQdata";
import SubHeading from "./subheading";
function FAQ(){
    function CreateFAQList(eachFAQ){
      return( 
          <FAQList 
              key={eachFAQ.identificationNo}
              id={eachFAQ.id}
              href={eachFAQ.href}
              question={eachFAQ.question}
              answer={eachFAQ.answer}
          />
      );
    }
    return(
        <section id="faq" class="faq section-bg">
        <div class="container" data-aos="fade-up">
  
          <SubHeading h2="F.A.Q" p="Frequently Asked Questions" />
          
          <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
  
            {FAQData.map(CreateFAQList)}
            
            {/* <FAQList id="faq1" href="#faq1" content="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui." />
            <FAQList id="faq2" href="#faq2" />
            <FAQList id="faq3" href="#faq3" />
            <FAQList id="faq4" href="#faq4" />
            <FAQList id="faq5" href="#faq5" />
            <FAQList id="faq6" href="#faq6" /> */}
  
          </ul>
  
        </div>
      </section>
    );
}
export default FAQ;