import React, { useState } from 'react'
import Navbar from "./Navbar.js"
// import mobile1 from "../images/mobile-image-hero-1.jpg";
// import mobile2 from "../images/mobile-image-hero-2.jpg";
// import mobile3 from "../images/mobile-image-hero-3.jpg";
// import desktop1 from "../images/desktop-image-hero-1.jpg";
// import desktop2 from "../images/desktop-image-hero-2.jpg";
// import desktop3 from "../images/desktop-image-hero-3.jpg";
import {Images} from "./Images"
import {TextData} from "./TextData"
import dark from "../images/image-about-dark.jpg";
import light from "../images/image-about-light.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Home({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    console.log(current)

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!Array.isArray(slides) || slides.length <=0) {
        return null
    }

    


    return (
        <div className="main bg-white font-spartan text-sm">
            <section className="relative sm:grid sm:grid-flow-row sm:grid-cols-3 sm:grid-rows-3 h-screen">
                <article className="relative sm:row-span-2 sm:col-span-2 w-full">
                    <Navbar />
                    
                    {Images.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt={slide.alt} className=" object-cover sm:hidden "/>
                                    
                                )}
                               {index === current && (
                            
                                    <img src={slide.images} alt={slide.alt} className="absolute hidden sm:block  w-full h-full"/>
                            )}
                            </div>
                                
                        )
                    })}
                    
                </article>
                <article className="relative md:row-span-2 flex  justify-center items-center">
                    
                        {TextData.map((text, index) => {
                            return (
                                <div className="max-w-xs md:max-w-full p-2">
                                    {index === current && (
                                         <h2 className="font-semibold text-xl md:text-3xl text-black-800 mb-4">{text.heading}</h2>
                                        
                                    )}
                                    {index === current && (
                                         <h2>{text.para}</h2>
                                        
                                    )}
                                   
                                </div>     
                            )
                        })}
                  
                    
                    <div className="absolute bottom-0 left-0 hidden md:block">
                        <button onClick={prevSlide} className="bg-black hover:bg-gray-500 text-white p-4 "><IoIosArrowBack /></button><button onClick={nextSlide} className="bg-black  hover:bg-gray-500 text-white p-4"><IoIosArrowForward /></button>
                    </div> 
                </article>

                <article className="">
                    <img src={dark} alt="mobile hero" className=" w-full h-full"/>
                    
                </article>

                <article className="flex flex-col justify-center items-center">
                    <div className="max-w-xs md:max-w-full p-8">
                        <h2 className="font-semibold text-black-600 mb-4">ABOUT OUR FURNITURE</h2>

                        <p>
                            Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                            or anything in between. Product specialists are available to help you create your dream space.

                        </p>
                    </div>
                    
                </article>

                <article>
                    <img src={light} alt="mobile hero" className=" w-full h-full"/>
               
                </article>
            </section>
        </div>
    )
}
