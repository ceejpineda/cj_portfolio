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
      className={`flex flex-col ${orderClasses} lg:flex-row lg:justify-between lg:gap-x-10`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="flex-1">
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
                className="bg-accent text-accent-content p-2 text-center rounded-lg no-underline"
              >
                Live View
              </a>
            )}
            {git && (
              <a
                href={git}
                target="_blank"
                className="bg-accent text-accent-content p-2 text-center rounded-lg no-underline"
              >
                Github
              </a>
            )}
            {vid && (
              <a
                href={vid}
                target="_blank"
                className="bg-accent text-accent-content p-2 text-center rounded-lg no-underline"
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
        <h3 className="lg:text-center mt-0 lg:mt-3" dangerouslySetInnerHTML={{__html: projectName}}></h3>
        <p className="text-justify" dangerouslySetInnerHTML={{__html: projectDescription}}></p>
      </div>
    </motion.div>
  );
}
