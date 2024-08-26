import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export default function ProjectCard({
  imageSrc,
  projectName,
  projectDescription,
  isEven,
  url,
  git,
  live,
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
      <div className="group relative flex-1">
        <img
          src={imageSrc}
          alt="Project Preview"
          className="rounded-lg w-full shadow-lg"
        />
        <div className="flex gap-2 lg:absolute bottom-0 left-0 right-0">
          <a
            href={url}
            target="_blank"
            className="w-1/3 lg:hidden lg:group-hover:block bg-accent bg-opacity-70 text-accent-content p-2 text-center rounded-lg"
          >
            Live View
          </a>
          <a
            href={git}
            target="_blank"
            className="w-1/3 lg:hidden lg:group-hover:block bg-accent bg-opacity-70 text-accent-content p-2 text-center rounded-lg"
          >
            Github
          </a>
          <a
            href={git}
            target="_blank"
            className="w-1/3 lg:hidden lg:group-hover:block bg-accent bg-opacity-70 text-accent-content p-2 text-center rounded-lg"
          >
            Video Demo
          </a>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="lg:text-center mt-0 lg:mt-10">{projectName}</h3>
        <p className="text-justify">{projectDescription}</p>
      </div>
    </motion.div>
  );
}
