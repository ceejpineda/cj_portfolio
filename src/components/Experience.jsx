import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="px-5 md:px-16 lg:px-20 flex flex-col gap-10 text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} // Lower amount due to potentially longer content
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="font-bold text-2xl text-primary">Experience</h1>
      <div>
        <span className="font-extralight text-sm">July 2024 - Present</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">Fullstack Developer (Backend Focus)</h2>
          <div className="flex items-center gap-1">
            <h3 className="text-base italic">Umbra Digital Company -</h3>
            <span className="text-sm">Full-Time Employment</span>
          </div>
        </div>

        <div className="pl-12 text-sm">
          <p className="font-semibold mb-2">• Sunnies System / Sunnies Club</p>
          <ul className="list-none pl-4 space-y-1">
            <li>○ Led the backend migration of the Sunnies System from <span className="text-secondary">PHP to the MERN stack</span> by developing a custom backend API framework using <span className="text-secondary">Express and TypeScript</span>.</li>
            <li>○ Spearheaded the company-wide <span className="text-secondary">backend and documentation API framework</span> for better workflow for developers.</li>
            <li>○ Proposed and spearheaded the creation of <span className="text-secondary">staging environments</span> for existing codebases, improving development workflows.</li>
            <li>○ Contributed to <span className="text-secondary">DevOps initiatives</span> and implemented <span className="text-secondary">CI/CD pipelines</span> for newer projects.</li>
            <li>○ Designed and implemented internal APIs to integrate with <span className="text-secondary">Klaviyo workflows</span> for customer retention automation.</li>
          </ul>
        </div>
      </div>

      <div>
        <span className="font-extralight text-sm">Jun 2023 - Jul 2024</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">
            Backend Developer (Node.js)
          </h2>
          <div className="flex items-center gap-1">
            <h3 className="text-base italic">
              Zeniark Philippines Consulting Corp. -
            </h3>
            <span className="text-sm">Fulltime</span>
          </div>
        </div>

        <p className="pl-12 text-sm">
          I led several key initiatives, with a primary focus on the PSSLAI
          project. I managed the{" "}
          <span className="text-secondary">migration of banking APIs</span>,
          which exposed me to a larger infrastructure and significantly enhanced
          my focus on
          <span className="text-secondary"> API security and stability</span>. I
          integrated a comprehensive app logger for system-wide use and deployed
          projects on <span className="text-secondary">AWS VPS servers</span>. I
          developed and implemented{" "}
          <span className="text-secondary">RESTful APIs</span> to support new
          features and effectively communicated details to non-technical
          clients. In addition to the PSSLAI project, I contributed to the
          Safetel project by developing an HTTP Request App logger for{" "}
          <span className="text-secondary">microservices</span>, creating{" "}
          <span className="text-secondary">RESTful APIs</span>, and implementing
          features like emailer and PDF contract generation. I also worked with
          the DocuSign API for contract signing. At BakerJ (Qwote), I{" "}
          <span className="text-secondary">mentored</span> junior PHP developers
          in transitioning to Node.js, guiding them in feature development and
          best practices.
        </p>
      </div>
      <div>
        <span className="font-extralight text-sm">Jan 2023 - May 2023</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">Trainee</h2>
          <div className="flex items-center gap-1">
            <h3 className="text-base italic">Village 88 Inc. -</h3>
            <span className="text-sm">Trainee</span>
          </div>
        </div>

        <p className="pl-12 text-sm">
          As a trainee, I focused on{" "}
          <span className="text-secondary">
            full-stack development training
          </span>{" "}
          courses, completing over 340 assignments, 5 exams, and 2 capstone
          projects. I created libraries, an{" "}
          <span className="text-secondary">MVC framework</span>, and a Ruby Gem
          from scratch. I was one of three trainees to present a fully
          functional <span className="text-secondary">eCommerce website</span>{" "}
          to over 140 trainees and the company owner, and one of four trainees
          to present a capstone project at graduation, earning an award for Best
          Capstone. This role significantly enhanced my development skills and
          provided a{" "}
          <span className="text-secondary">
            solid foundation in development fundamentals
          </span>
          .
        </p>
      </div>
      <div>
        <span className="font-extralight text-sm">2020 - 2023</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">Career Break</h2>
          <div className="flex items-center gap-1">
            <h3 className="text-base italic">Self-employed</h3>
            {/* <span className="text-sm">Fulltime</span> */}
          </div>
        </div>

        <p className="pl-12 text-sm">
          During a career break from 2020 to 2023, I{" "}
          <span className="text-secondary">
            co-owned and managed Wingcraft Models
          </span>
          , a small manufacturing business with six skilled employees. I was
          responsible for day-to-day operations, building and
          <span className="text-secondary">
            maintaining the company website
          </span>
          , managing client communications, and overseeing social media and
          advertising efforts to boost sales. I also produced computer-generated
          drawings for manufacturing. During this period, I took the opportunity
          to <span className="text-secondary">study web development</span> while
          focusing on the family business.
          <br />
          <br />
          I've also did some freelance work, creating websites for small
          businesses and individuals that I know personally during this time.
          This allowed me to practice my skills and learn new technologies.
        </p>
      </div>
      <div>
        <span className="font-extralight text-sm">Jan 2019 - Dec 2019</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">
            Global Network Operations Engineer
          </h2>
          <div className="flex items-center gap-1">
            <h3 className="text-base italic">Converge ICT Solutions -</h3>
            <span className="text-sm">Fulltime</span>
          </div>
        </div>

        <p className="pl-12 text-sm">
          As a Global Network Operations Center Engineer, I effectively
          responded to enterprise alerts, restored services, and managed
          incident resolution. I managed Cisco{" "}
          <span className="text-secondary">routers and servers</span>, gaining
          experience in{" "}
          <span className="text-secondary">
            request/response handling and web traffic balancing
          </span>
          , crucial in an{" "}
          <span className="text-secondary">ISP environment</span>. My
          responsibilities also included troubleshooting, escalating issues, and
          documenting incidents to maintain operational efficiency.
          Additionally, I proactively monitored websites to detect issue,
          working to{" "}
          <span className="text-secondary">
            resolve system and network issues
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
};
