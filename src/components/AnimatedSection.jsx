import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 md:py-16" // Add some default padding, adjust as needed
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 