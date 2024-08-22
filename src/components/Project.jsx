import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {src: '/assets/projects/pahina.png', name: 'Pahina', url: 'https://youtu.be/q4U_XKjuUZU',
  description: 'A Bookstore App made with Angular and ASP.NET Core. APIs are secured with JWT Authentication and Role-based authorization. It has a shopping cart, profile settings, history report, product comments, and a checkout page with email receipt. It also has a dashboard for the admin to manage the books and orders with report generation presented in Graphs and CSV files.'},
  {src: '/assets/projects/habibi.png', name: 'Habibi', url: 'https://youtu.be/9RcFPcBnd3I',
  description: 'A Dating application made with Ruby on Rails. It has a matching algorithm, chat, video call, and a profile page. Users are able to like, or pass profiles and if both users liked each other, they will be matched and can start chatting.'},
  {src: '/assets/projects/exploar.png', name: 'ExploAR', url: 'https://youtu.be/a4o_RM5jX58',
  description: 'An AR application that aims to to provide an interactive experience to tourists in Bahay ni Rizal (Calamba, Philippines) as per request of the LGU of Calamba. This comes with an Admin dashboard that gives control over users and provides summary of data. This app is developed using Flutter, Dart, Firebase, Unity, Vuforia Engine, and C#.'},
  {src: '/assets/projects/gorilla.png', name: 'Gorilla Skincare', url: 'https://youtu.be/eJSKeVxQ9Ec',
  description: 'A skincare E-commerce website that features both user and admin CRUD functionality with Stripe payment integration. This is built using PHP Codeigniter, MySQL, HTML, and SCSS.'},
  {src: '/assets/projects/youtube.png', name: 'Youtube Clone', url: 'https://youtu.be/w_vR2Fc3dq0',
  description: 'A Youtube clone made with React + Vite and Youtube API. It has a video player, search function, and video recommendations.'},
  {src: '/assets/projects/yourMemo.png', name: 'yourMemo', url: 'https://youtu.be/6wo5M8OMJ20',
  description: 'A digital album application that stores user’s images and provide captions presented in a Polaroid format. Technologies used includes C#, ASP.net MVC Framework, HTML, CSS, and Firebase. '},
  {src: '/assets/projects/PSG.png', name: 'PSG MVC Framework', url: 'https://github.com/ishnoopy/PSG',
  description: 'PSG is a lightweight MVC (Model-View-Controller) framework designed for Node.js and Express, offering a structured approach to building scalable applications while effectively separating application logic. Its key features include adhering to the MVC architecture, intuitive routing through Express, support for various database systems, the use of templating engines like EJS for dynamic views, and the ability to employ Express middleware for common tasks such as authentication and error handling.'},
]

export default function Project() {

  return (
    <>
        <div id='projects' className='prose prose-base max-w-none px-8 md:px-28 lg:px-20 gap-y-10 lg:gap-y-0 pb-20 flex flex-col items-center'>
            <h2 className='text-blue-700 mb-0 lg:mb-10 lg:mt-2'>Projects</h2>
            {projectData.map((project, index) =>{
              return(
                <ProjectCard key={index} imageSrc={project.src} projectName={project.name} projectDescription={project.description} url={project.url} isEven={index%2==0} />
              )
            })}
        </div>
    </>
  )
}
