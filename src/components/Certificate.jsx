import React from 'react'
import { Carousel } from "@material-tailwind/react";

export default function Certificate() {
    const certificate = [
        {src: "/assets/certificates/best-developer.png", alt: "Best Developer Certificate"},
        {src: "/assets/certificates/best-capstone.png", alt: "Best Capstone Certificate"},
        {src: "/assets/certificates/web-funda.png", alt: "Web Fundamentals Certificate"},
        {src: "/assets/certificates/advanced-php.png", alt: "Advanced PHP Certificate"},
        {src: "/assets/certificates/advanced-javascript.png", alt: "Advanced Javascript Certificate"},
        {src: "/assets/certificates/week-capstone.png", alt: "1 Week Capstone Certificate"},
        {src: "/assets/certificates/backend-development.png", alt: "Backend Development Certificate"},
    ]

    return (
        <Carousel
          className="rounded-xl"
          autoplay={true}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-5 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-black w-8" : "bg-black/50 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          
        {certificate.map((cert,index) =>{
            return(
                <img key={index} src={cert.src} alt={cert.alt} className='w-full aspect-video rounded-lg bg-gray-200 border border-gray-500 p-1' />
            )
        })}
          
        </Carousel>
      );
}
