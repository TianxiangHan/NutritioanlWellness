import React from "react";
import NavBar from "./Nav-bar";
import Hero from "./Hero";
import About from "./about";
import AOS from "aos";
import Service from "./service";
import Portfolio from "./portfolio";
import FAQ from "./FAQ";
import Team from "./team";
import Client from "./client";
import ContactUs from "./contactUs";
import Footer from "./footer";
function App() {
  AOS.init();
  


  return (
    <div>
       <NavBar />
       <Hero />
       <main id="main">
         <About />
         <Service />
         <Portfolio />
         <FAQ />
         <Team />
         <Client />
         <ContactUs />
       </main>
       <Footer />
    </div>
    
  );
}

export default App;
