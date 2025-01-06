import React from "react";
import ProjectCard from "./ProjectCard";

const contractedProjectData = [
  {
    src: [
      {
        img: "/assets/projects/drcomoi/dr4.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/drcomoi/dr5.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/drcomoi/dr3.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/drcomoi/dr2.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/drcomoi/dr1.png",
        alt: "Wingcraft Models Home",
      },
    ],
    name: "Dr. Comoi B2B",
    git: "",
    url: "https://www.drcomoi.com/",
    vid: "",
    description:
      "A website for a business that sells beauty products. It has an online store, a contact form for inquiries, and order tracking on admin side. It is made using <span class='text-secondary'>Node.js, Express.js, MongoDB, React, TailwindCSS, AWS</span>. I'm responsible for the <span class='text-secondary'>frontend, backend development, and deployment</span> of the website.",
  },
  {
    src: [
      {
        img: "/assets/projects/wingcraft/wc3.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/wingcraft/wc1.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/wingcraft/wc2.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/wingcraft/wc4.png",
        alt: "Wingcraft Models Home",
      },
    ],
    name: "Wingcraft Models",
    git: "",
    url: "https://www.wingcraftmodels.com/",
    vid: "",
    description:
      `A website for a small business that sells model airplanes. It has a list of products, a showcase of the models and the process, and a contact form for inquiries and orders. It is made using <span class='text-secondary'>PHP, WordPress, Elementor, CPanel</span>. I'm responsible for the <span class='text-secondary'>design, development, and deployment</span> of the website.
      It also has a admin side where the admin can manage the orders with a "kanban" style board. Made using <span class='text-secondary'>React, Node.js, Express.js, MongoDB</span>.`,
  },
  {
    src: [
      {
        img: "/assets/projects/leasing/leasing3.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/leasing/leasing.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/leasing/leasing2.png",
        alt: "Wingcraft Models Home",
      },
    ],
    name: "Seamless Leasing",
    git: "",
    url: "",
    vid: "",
    description:
      "A <span class='text-secondary'>property management</span> site that allows landlords to manage their properties and tenants. Create Offers, Contracts, Quotes, Invoices and etc. It is made using <span class='text-secondary'>Custom Python Framework, PostgreSQL, Docker and React</span>. I'm one of the main developer responsible for building <span class='text-secondary'>backend and frontend</span> of the site.",
  },
  {
    src: [
      {
        img: "/assets/projects/payportal/payportal.png",
        alt: "Wingcraft Models Home",
      }
    ],
    name: "PayPortal",
    git: "",
    url: "",
    vid: "",
    description:
      "A simple payment portal that allows users to submit payment to the client, it used an <span class='text-secondary'>external API</span> to manage the payment on Gcash/PayMaya and Crypto. It is made using <span class='text-secondary'>Next.js, Node.js, Express, MySQL</span>. I'm responsible for the <span class='text-secondary'>design, development, and deployment</span> of the website.",
  },
];

export default function Project() {
  return (
    <>
      <div
        id="projects"
        className="bg-base-300 prose prose-base max-w-none p-8 md:px-28 lg:px-20 gap-y-10 lg:gap-y-0 pb-20 rounded-lg mb-10"
      >
        <h2 className="text-primary mb-0 lg:mb-10 lg:mt-2">
          Contracted Projects
        </h2>
        <div className="flex flex-col items-center gap-10 lg:gap-32">
          {contractedProjectData.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                imageSrc={project.src}
                projectName={project.name}
                projectDescription={project.description}
                url={project.url}
                isEven={index % 2 == 1}
                git={project.git}
                live={project.live}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
