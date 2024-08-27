import React, { useState, useEffect } from "react";

export const Experience = () => {
  return (
    <section id="experience" className="px-5 lg:px-64 flex flex-col gap-10 text-justify">
      <h1 className="font-bold text-2xl text-primary">Experience</h1>
      <div>
        <span className="font-extralight text-sm">May 2024 - Present</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">Fullstack Developer</h2>
          <div className="flex items-center gap-1">
            <h3 className="text-md italic">Seamless Leasing (UAE) -</h3>
            <span className="text-s">Contract</span>
          </div>
        </div>

        <p className="pl-12 text-s">
          As a main developer for Seamless Leasing, I utilized a <span className="text-secondary">custom
          Python full-stack framework</span> to develop and integrate real estate logic
          into the code. I translated <span className="text-secondary">Miro flowcharts and Balsamiq wireframes </span>
          into scalable backend entities, ensuring accurate implementation of
          business logic. My responsibilities included setting up caching
          mechanisms, configuring cloud-based PostgreSQL database calls, and
          integrating <span className="text-secondary">analytics and dashboards</span> for data insights.
        </p>
      </div>

      <div>
        <span className="font-extralight text-sm">Jun 2023 - Jul 2024</span>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-accent">
            Backend Developer (Node.js)
          </h2>
          <div className="flex items-center gap-1">
            <h3 className="text-md italic">
              Zeniark Philippines Consulting Corp. -
            </h3>
            <span className="text-s">Fulltime</span>
          </div>
        </div>

        <p className="pl-12 text-s">
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
            <h3 className="text-md italic">Village 88 Inc. -</h3>
            <span className="text-s">Trainee</span>
          </div>
        </div>

        <p className="pl-12">
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
            <h3 className="text-md italic">Self-employed</h3>
            {/* <span className="text-s">Fulltime</span> */}
          </div>
        </div>

        <p className="pl-12">
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
            <h3 className="text-md italic">Converge ICT Solutions -</h3>
            <span className="text-s">Fulltime</span>
          </div>
        </div>

        <p className="pl-12">
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
    </section>
  );
};
