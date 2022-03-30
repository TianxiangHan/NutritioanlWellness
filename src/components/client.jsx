import React from "react";
//import swiper@6.8.4 as the latest swiper version not compatible with React
import SwiperCore,{ Navigation, Pagination,Scrollbar, EffectFade,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  

import ClientData from "../clientData";
 

function Client (){
    SwiperCore.use([Navigation,Pagination,EffectFade,Autoplay]);
    function FetchClient(eachClient){
         return(
            <SwiperSlide >
              <img
                key={eachClient.id}
                src={eachClient.imagePath}
                class="img-fluid" 
              />
            </SwiperSlide>
         ); 
    }
    return(
        <section id="clients" class="clients section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Clients</h2>
            <p>They trusted us, why dont you</p>
          </div>
  
          <div class="clients-slider" data-aos="fade-up" data-aos-delay="100">
            <div class="align-items-center">
            <Swiper
                effect={"cards"}
                modules={[Navigation, Pagination,EffectFade,Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                // centeredSlides={true}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}           
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                className="mySwiper"
                autoplay={{delay: 1000,disableOnInteraction: false,}}
             >
              
                  {ClientData.map(FetchClient)}
              
              
              {/* <SwiperSlide ><img src="img/clients/client-1.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-2.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-3.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-4.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-5.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-6.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-7.png" class="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide ><img src="img/clients/client-8.png" class="img-fluid" alt=""/></SwiperSlide> */}
              
              </Swiper>
            </div>
            <div class="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
    );
}
export default Client;