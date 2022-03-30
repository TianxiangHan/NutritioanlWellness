import React,{useState} from "react";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/82041c80-aef9-11ec-b83f-8f17e10d6288"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="php-email-form"
    >
      <div className="row">
      <div className="form-group col-6">
      <label htmlFor="name">Your Name</label>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="form-group col-6 mt-3 mt-md-0">
      <label htmlFor="name">Your Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      </div>
      
      <div className="form-group mt-3">
      <label htmlFor="name">Message</label>
        <textarea
          placeholder="Your message"
          name="message"
          className="form-control relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          rows="15" 
          required
        />
      </div>
      <div className="text-center">
        <button
          
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};
    
export default ContactForm;