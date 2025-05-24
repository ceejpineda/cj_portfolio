import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Certificate from "./Certificate";

export default function ProjectCard({
  imageSrc,
  projectName,
  projectDescription,
  isEven,
  url,
  git,
  vid,
}) {
  const orderClasses = isEven ? "lg:flex-row-reverse" : "lg:flex-row";

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${orderClasses} lg:flex-row lg:justify-between lg:gap-x-10 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -6, 
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
    >
      <div className="flex-1 mb-6 lg:mb-0">
        {/* <img
          src={imageSrc}
          alt="Project Preview"
          className="rounded-lg w-full shadow-lg mb-2"
        /> */}
        <Certificate 
          src={imageSrc}
        />
        {(url || vid || git) ? (
          <div className="inline-flex space-x-2 w-full justify-center mt-2">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-content px-4 py-2 text-center rounded-lg no-underline hover:opacity-90 transition-opacity"
              >
                Live View
              </a>
            )}
            {git && (
              <a
                href={git}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-content px-4 py-2 text-center rounded-lg no-underline hover:opacity-90 transition-opacity"
              >
                Github
              </a>
            )}
            {vid && (
              <a
                href={vid}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-content px-4 py-2 text-center rounded-lg no-underline hover:opacity-90 transition-opacity"
              >
                Video Demo
              </a>
            )}
          </div>
        ) : (
          <div className="inline-flex space-x-2 w-full justify-center mt-2 p-2 invisible">
            a
          </div>
        )}
        </div>
      <div className="flex-1">
        <h3 className="lg:text-center mt-4 lg:mt-3" dangerouslySetInnerHTML={{__html: projectName}}></h3>
        <p className="text-left" dangerouslySetInnerHTML={{__html: projectDescription}}></p>
      </div>
    </motion.div>
  );
}
