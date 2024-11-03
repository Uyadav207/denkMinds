import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const letters = [..."denkMinds"]; // Split text into individual letters

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  // Trigger fade-out of the entire loader after the specified time
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Set fadeOut to true after 4 seconds
    }, 4000); // Total time for loader (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="loaderContainer bg-contactus-gradient flex items-center justify-center min-h-screen p-6 sm:p-90 md:p-90 lg:p-16" // Responsive padding for mobile view
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }} // Fade out when fadeOut is true
      transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth fade-out for entire loader
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }} // Disable interaction on fade-out
    >
      <motion.div
        className="loaderText text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold" // Adjusted responsive font size
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} className="letter inline-block" variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;

// Animation Variants for each letter
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between each letter
      duration: 1.5, // Control overall speed
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 }, // Start with 0 opacity
  visible: {
    opacity: 1, // Fade to 100% opacity
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
