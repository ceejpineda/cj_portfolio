import React from 'react'
import { Carousel } from "@material-tailwind/react";

export default function Certificate({src}) {
    return (
      <Carousel
          className="rounded-xl m-0"
          loop={true}
        >
        {src.map((cert,index) =>{
            return(
                <img key={index} src={cert.img} alt={cert.alt} className='w-full aspect-auto rounded-lg bg-gray-200 border border-gray-500 p-1 m-0' />
            )
        })}
          
        </Carousel>
      );
}
