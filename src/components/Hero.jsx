import React from 'react'
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Tooltip } from '@mui/material';

const URL = {
  linkedin: 'https://www.linkedin.com/in/pinedacj/',
  github: 'https://github.com/ceejpineda',
  email: 'mailto:pinedacj1020@@gmail.com',
  CV: 'https://drive.google.com/file/d/1qrOGkFMZOFdwB_7W2R4J0VkGHzl_HnT6/view?usp=sharing'
}


export default function Hero() {
  const backEndStack = [
    {name: "Node.js", src: "/assets/icons/nodejs.svg"},
    {name: "Express.js", src: "/assets/icons/express.svg"},
    {name: "Nestjs", src: "/assets/icons/nest-js.svg"},
    {name: "Python", src: "/assets/icons/python.svg"},
    {name: "PHP", src: "/assets/icons/php.svg"},
  ]
  
  const frontEndStack = [
    {name: "Next.js", src: "/assets/icons/next-js.svg"},
    {name: "React", src: "/assets/icons/react.svg"},
    {name: "TailwindCSS", src: "/assets/icons/tailwindcss-icon.svg"},
    {name: "Bootstrap", src: "/assets/icons/bootstrap.svg"},
    {name: "MaterialUI", src: "/assets/icons/material-ui.svg"},
  ]

  const databaseStack = [
    {name: "MySQL", src: "/assets/icons/mysql.svg"},
    {name: "MongoDB", src: "/assets/icons/mongodb.svg"},
    {name: "PostgreSQL", src: "/assets/icons/postgresql.svg"},
  ]

  const techStackRowFour = [
    {name: "Linux", src: "/assets/icons/linux.svg"},
    {name: "Docker", src: "/assets/icons/docker.svg"},
    {name: "Git", src: "/assets/icons/git-icon.svg"},
    {name: "Nginx", src: "/assets/icons/nginx.svg"},
    {name: "AWS", src: "/assets/icons/aws.svg"},
    {name: "DigitalOcean", src: "/assets/icons/digitalocean.svg"},
    {name: "PM2", src: "/assets/icons/pm2.svg"},
  ]

  const testingStack = [
    {name: "Postman", src: "/assets/icons/postman.svg"}
  ]

    return (
        <>
          <div id="hero" className='max-w-7xl min-h-[90vh] lg:min-h-[98vh] m-[2vh] px-8 lg:px-28'>
            <div className="flex flex-col items-center justify-between w-full text-center lg:flex-row md:min-h-[62vh]">
              <div className='flex justify-between order-2 mt-8 lg:order-1'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div className='flex flex-col gap-5 text-center lg:text-left items-center'>
                    <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
                      Hello, I'm 
                      <p className='text-accent block mt-2 text-2xl md:text-3xl lg:text-6xl'>@ceejpineda.</p>
                    </h1>
                    <p>
                      I'm an <span className="text-secondary">electronics engineer</span> turned <span className="text-secondary">software developer</span>.
                      <br/> 
                      Currently a <span className="text-secondary">Full Stack Developer</span>.
                    </p>
                    <a href={URL.CV} className='w-2/5 btn btn-primary bg-button text-primary-content' target='_blank'>View CV</a>
                    <div className="flex mt-2 w-full justify-center text-neutral-content">
                      <a href={URL.linkedin} target='_blank'><LinkedInIcon fontSize="large" className='cursor-pointer opacity-90 hover:scale-110 hover:opacity-100' /></a>
                      <a href={URL.github} target='_blank'><GitHubIcon fontSize="large" className='cursor-pointer opacity-90 hover:scale-110 hover:opacity-100' /></a>
                      <a href={URL.email}><EmailIcon fontSize="large" className='cursor-pointer opacity-90 hover:scale-110 hover:opacity-100' /></a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className='flex justify-center order-1'>
                  <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1}}
                   transition={{ duration: 1 }}
                  >
                    <div className='hero-img aspect-square'></div>
                  </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col items-center gap-5 sm:mt-5 lg:grid lg:grid-cols-2 lg:items-start lg:gap-5">
                <h3 className='text-primary font-bold text-xl lg:text-3xl lg:col-span-2 lg:justify-self-center'>Professional Tech Stack</h3>
              
                <div className='flex flex-col items-center gap-5 text-xl lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-5'>
                  <div className='flex flex-col items-center gap-2'>
                    <h4>Backend:</h4>
                    <div className="flex flex-wrap justify-center gap-4 items-center">
                      {backEndStack.map((icon, index) => (
                        <Tooltip title={icon.name} key={index}>
                          <img
                            src={icon.src}
                            alt={icon.name}
                            key={index}
                            className='aspect-square w-11 rounded-full bg-gray-200 border-2 border-gray-500 p-1 hover:scale-150 duration-200 shadow-md'
                          />
                        </Tooltip>
                      ))}
                    </div>
                  </div>
              
                  <div className='flex flex-col items-center gap-2'>
                    <h4>Frontend:</h4>
                    <div className="flex flex-wrap justify-center gap-4 items-center">
                      {frontEndStack.map((icon, index) => (
                        <Tooltip title={icon.name} key={index}>
                          <img
                            src={icon.src}
                            alt={icon.name}
                            key={index}
                            className='aspect-square w-11 rounded-full bg-gray-200 border-2 border-gray-500 p-1 hover:scale-150 duration-200 shadow-md'
                          />
                        </Tooltip>
                      ))}
                    </div>
                  </div>
              
                  <div className='flex flex-col items-center gap-2'>
                    <h4>Databases:</h4>
                    <div className="flex flex-wrap justify-center gap-4 items-center">
                      {databaseStack.map((icon, index) => (
                        <Tooltip title={icon.name} key={index}>
                          <img
                            src={icon.src}
                            alt={icon.name}
                            key={index}
                            className='aspect-square w-11 rounded-full bg-gray-200 border-2 border-gray-500 p-1 hover:scale-150 duration-200 shadow-md'
                          />
                        </Tooltip>
                      ))}
                    </div>
                  </div>
              
                  <div className='flex flex-col items-center gap-2'>
                    <h4>Server/Deployment:</h4>
                    <div className="flex flex-wrap justify-center gap-4 items-center">
                      {techStackRowFour.map((icon, index) => (
                        <Tooltip title={icon.name} key={index}>
                          <img
                            src={icon.src}
                            alt={icon.name}
                            key={index}
                            className='aspect-square w-11 rounded-full bg-gray-200 border-2 border-gray-500 p-1 hover:scale-150 duration-200 shadow-md'
                          />
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </>
      );
    }
