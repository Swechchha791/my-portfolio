import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import resume from "../assets/my-resume.pdf";

const Home = () => {
  // useAnimation hook to control animations
  const controls = useAnimation();

  // useInView hook to detect when the element is in view
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation on every load if true then will trigger once
    threshold: 0.1, // Percentage of the element in view before triggering
  });

  // useEffect hook to start animation when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start the "visible" animation when the component is in view
    } else {
      controls.start("hidden"); // Start the "hidden" animation when the component leaves the viewport
    }
  }, [controls, inView]); // Dependency array to trigger useEffect on changes to controls or inView

  // Variants for the motion.div animation
  const boxVariants = {
    hidden: { opacity: 0, x: -70 }, // Initial state, hidden and shifted left
    visible: { opacity: 1, x: 0, transition: { duration: 2 } }, // Final state, fully visible and in place
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen home-screen w-full"
      id="home"
    >
      <div className="flex items-center justify-center w-full">
        <motion.div
          // The ref attribute connects the element to the useInView hook
          ref={ref}
          initial="hidden"
          animate={controls}
          // Apply variants for the animation
          variants={boxVariants}
          className="text-white lg:mr-10 absolute py-20 px-40 text-center sm:mt-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-6xl font-bold gradient-text">
            Hi, I'm Swechchha
          </h1>
          <p className="text-2xl mt-4 font-bold">
            A Passionate React Frontend Developer
          </p>
          <p className="mt-6 text-lg font-medium">
            I specialize in building responsive and interactive web applications
            using modern technologies.
          </p>

          {/* Download Resume Button */}
          <div className="mt-10 transition-all duration-1000 hover:scale-125">
            <a
              href={resume}
              download="Swechchha_Resume.pdf"
              className="px-4 py-2 text-white rounded-lg border-2 border-sky-500 text-md shadow-3xl-sky hover:bg-gradient-to-tl from-sky-400 from-10% via-sky-600 via-30% to-sky-400 to-90% "
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
