import React from 'react'
import Timeline from './Timeline'
import Certificate from './Certificate'
import { motion, useAnimation } from 'framer-motion';


export default function About() {
  return (
    <>
    <div id='about' className='prose prose-base bg-neutral max-w-none px-8 md:px-28 lg:px-20 pb-10 flex flex-col items-center rounded-lg'>
        <div className="mx-auto w-full text-justify flex flex-col gap-x-10 lg:flex-row lg:items-center">
            <div className="flex items-center justify-center flex-1">
                <img src="/assets/SHS-grad-pic.jpg" alt="Graduation picture" className='aspect-auto w-80 h-auto rounded-lg shadow-lg' />
            </div>
            <div className='flex-1'>
                <h3 className='text-center m-0 text-blue-700'>About Me</h3>
                <h2 className='text-center'>"Consistency & Discipline"</h2>
                <p>A passionate web developer who makes web apps for the dopamine it gives. Loves the process, and embodies the principle of consistency and discipline. Equipped with programming fundamentals, I am able to use different tools in making efficient and optimal programs.</p>
                <p>I believe that practice makes a good developer and be <span className='font-bold'>1% better each day</span>. I am open for criticism, improvements, and is obsessed in learning.</p>
            </div>
        </div>
       
        <div className="flex flex-col lg:flex-row lg:items-center gap-x-10">
            <div className='mx-auto flex flex-col items-center flex-1 lg:w-1/3'>
                <h3 className='text-blue-700  lg:text-center'>Certificates</h3>
                <p className='text-justify'>I have undergone hundreds of hours of rigorous training in web development and software testing.</p>
            </div>
            <div className='flex-1'>
                <Certificate />
            </div>
        </div>

        {/* <Timeline /> */}
    </div>
    
    </>
  )
}
