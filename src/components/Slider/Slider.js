/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Slider = () => {
    return (
        <div className="">
            <Carousel className=" lg:w-[470px]"> 
                  <div className="h-[440px] "> 
                      <img className="" src="https://i.ibb.co/72LgnX1/Rectangle-4332.jpg"/>
  
                  </div> 
                  <div className="h-[440px]"> 
                      <img className="" src="https://i.ibb.co/72LgnX1/Rectangle-4332.jpg" /> 
  
                  </div> 
                  <div className="h-[440px]"> 
                      <img className="" src="https://i.ibb.co/72LgnX1/Rectangle-4332.jpg"/> 
  
                  </div> 
                  <div className="h-[440px]"> 
                      <img src="https://i.ibb.co/72LgnX1/Rectangle-4332.jpg"/> 
  
                  </div> 
                  <div className="h-[440px]"> 
                      <img src="https://i.ibb.co/72LgnX1/Rectangle-4332.jpg"/>
  
                  </div> 
              </Carousel> 
        </div>
    );
};

export default Slider;