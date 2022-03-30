import React from "react";
import { useState } from "react/cjs/react.production.min";
function NavBar(){

    const[Clicked,setClicked]=React.useState(false);
    const [Cliking,setClicking]=React.useState(true);
    
    function ClickRespond(event){   
    //switch the navbar class to mobile when clicked the button
        event.target.classList.toggle('bi-x'); 
   
        if(Cliking){
            setClicked(true);
            setClicking(false);
        }
        else if(!Cliking){
            setClicked(false);
            setClicking(true);
        }  
    }
   
  
   function ulOnClick(){
       //switch the navbar class to nav when clicked the button and reset the parameters for checking navbar class
    if(!Cliking){
        
        document.getElementById("button").classList.toggle('bi-x');
        setClicked(false);
        setClicking(true);
    }
    
   }
    return(
        
      <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
       
      </div>

      <nav id="navbar" className={Clicked? "navbar-mobile":"navbar" }>
        <ul  onClick={ulOnClick}>
          <li ><a  className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About Us</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i id="button" onClick={ClickRespond} className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
      </header>);
  {/* <!-- End Header --> */}
    
    
}
export default NavBar;