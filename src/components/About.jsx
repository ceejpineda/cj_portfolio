import React from "react";
import Timeline from "./Timeline";
import Certificate from "./Certificate";
import { motion, useAnimation } from "framer-motion";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="prose prose-base bg-base-300 py-16 max-w-none px-8 md:px-28 lg:px-20 flex flex-col items-center rounded-lg"
      >
        <div className="mx-auto w-full text-justify flex flex-col gap-x-10 lg:flex-row lg:items-center">
          <div className="flex items-center justify-center flex-1">
            <img
              src="/assets/about.jpg"
              alt="Graduation picture"
              className="aspect-auto w-4/5 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-center m-0 text-primary text-3xl mb-4">
              About Me
            </h3>
            <p className="text-md leading-relaxed max-w-2xl mb-8">
              I'm a <span className="text-accent">Full-Stack Developer</span>{" "}
              with a love for both backend and frontend work. I've gained
              experience working{" "}
              <span className="text-accent">professionally</span> and as a{" "}
              <span className="text-accent">freelance developer</span>,
              successfully completing and deploying{" "}
              <span className="text-accent">multiple projects</span> that
              sharpened my coding and problem-solving skills.
              <br />
              <br />
              My focus is on{" "}
              <span className="text-accent">backend development</span>, but I
              also have a passion for{" "}
              <span className="text-accent">frontend</span>, crafting intuitive,
              interfaces to match the backend functionality. I thrive on{" "}
              <span className="text-accent">
                building projects from scratch
              </span>{" "}
              and{" "}
              <span className="text-accent">exploring new technologies</span>
              .
              <br />
              <br />I host my own hobby{" "}
              <span className="text-accent">projects/websites</span> on a mini{" "}
              <span className="text-accent">server</span> I manage at home,
              where I love to{" "}
              <span className="text-accent">tinker and optimize</span> the best
              possible way to do it. Outside of coding, I'm a{" "}
              <span className="text-accent">gamer</span>,{" "}
              <span className="text-accent">weightlifter</span>, and{" "}
              <span className="text-accent">CrossFit enthusiast</span>, always
              pushing my limits physically and mentally.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row lg:items-center gap-x-10">
            <div className='mx-auto flex flex-col items-center flex-1 lg:w-1/3'>
                <h3 className='text-blue-700  lg:text-center'>Certificates</h3>
                <p className='text-justify'>I have undergone hundreds of hours of rigorous training in web development and software testing.</p>
            </div>
            <div className='flex-1'>
                <Certificate />
            </div>
        </div> */}

        {/* <Timeline /> */}
      </div>
    </>
  );
}
