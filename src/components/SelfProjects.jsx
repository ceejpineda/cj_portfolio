import React from "react";
import ProjectCard from "./ProjectCard";

const contractedProjectData = [
  {
    src: [
      {
        img: "/assets/projects/saljuana/saljuana8.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana9.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana7.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana5.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana6.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana2.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana3.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/saljuana/saljuana4.png",
        alt: "Wingcraft Models Home",
      },
    ],
    name: "Saljuana (eCommerce)",
    git: "https://github.com/ceejpineda/Saljuana-ECommerce",
    url: "",
    vid: "https://www.youtube.com/watch?v=B_ocxSPGXdk",
    description:
      "A fullstack eCommerce website made to be submitted as my Capstone Project in Village88 Inc. Bootcamp. It is made using <span class='text-secondary'>PHP CodeIgniter, HTML, CSS and Vanilla JS</span>. It has a list of products, review/rating system, cart, checkout, and admin panel for managing products, orders, users and analytics. I'm responsible for the <span class='text-secondary'>design, development, and deployment</span> of the website. <br/> <br/> It won one of the <span class='text-secondary'>Best Capstone Award</span> in the batch.",
  },
  {
    src: [
      {
        img: "/assets/projects/duck/duck7.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/duck/duck5.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/duck/duck4.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/duck/duck2.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/duck/duck3.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/duck/duck6.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/duck/duck.png",
        alt: "Wingcraft Models Home",
      },
    ],
    name: "Duck",
    git: "https://github.com/ceejpineda/duck-v3",
    url: "",
    vid: "https://www.youtube.com/watch?v=wEby6ISwd3I",
    description:
      "An <span class='text-secondary'>company management (discord/slack inspired)</span> website made to be submitted as my Final Capstone Project in Village88 Inc. Bootcamp. It is made using <span class='text-secondary'>Ruby on Rails, Hotwire/Turbo, Tailwind, Redis, VonageAPI</span>. It has a time-in/time-out feature, daily reports and emails, user profiles and inactivity tracker. I'm responsible for the <span class='text-secondary'>design, development, and deployment</span> of the website. <br/> <br/> It won one of the <span class='text-secondary'>Backend Best Capstone Award</span> in the batch.",
  },
  {
    src: [
      {
        img: "/assets/projects/arcade/DuckHunt.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/arcade/Arcade.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/arcade/SpaceInvaders.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/arcade/Tetris.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/arcade/TicTacToe.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/arcade/FlappyBird.png",
        alt: "Wingcraft Models Home",
      },
      {
        img: "/assets/projects/arcade/PlantsVsZombies.png",
        alt: "Wingcraft Models Home",
      },
    ],
    name: "Classic Arcade Games (Duck Hunt, 1942-Space, etc)",
    git: "https://github.com/ceejpineda",
    url: "https://ceejpineda.github.io/arcade/",
    vid: "",
    description:
      "Collection of Classic Arcade Games made to practice and showcase my skills in <span class='text-secondary'>HTML, CSS, Vanilla JavaScript</span>. It has a list of games like Duck Hunt, 1942-Space, Tetris, TicTacToe, Flappy Bird, Plants vs Zombies, and more. <br/> <br/> They are playable on the browser by visiting the site by clicking `Live View` button. All games are made from scratch and are avaiable on my <span class='text-secondary'>Github</span> to use as reference.",
  },
  {
    src: [
      {
        img: "/assets/projects/daft/daft.png",
        alt: "Wingcraft Models Home",
      }
    ],
    name: "Daft (an express.js based MVC framework)",
    git: "https://github.com/ceejpineda/Daft-MVC",
    url: "",
    vid: "",
    description:
      "Daft is a <span class='text-secondary'>lightweight MVC (Model-View-Controller) framework</span> for small projects built using <span class='text-secondary'>Node.js and Express</span>. It provides a structured way to organize your code, separate concerns, and build scalable applications. It can handle different kinds of database like <span class='text-secondary'>(MySQL, MongoDB and Postgres) and supports Redis</span>. </br> </br> Available for free use on my <span class='text-secondary'>Github</span>",
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
          Personal Projects
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
                vid={project.vid}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
