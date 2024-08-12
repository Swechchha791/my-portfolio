import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

import project1_img from "../assets/project1-img.png";
import project2_img from "../assets/project2-img.png";
import project3_img from "../assets/project3-img.png";
import project4_img from "../assets/project4-img.png";
import project5_img from "../assets/project5-img.png";
import project6_img from "../assets/project6-img.png";

const projects = [
  // Project objects with ids
  {
    id: 1,
    name: "My-portfolio-website",
    description: "This is a short description of project 1.",
    images: [project1_img],
    codeLink: "https://github.com/Swechchha791/my-portfolio",
    previewLink: "https://swechchha-portfolio.vercel.app",
  },
  {
    id: 2,
    name: "Social-hub",
    description: "Clone of social-media platform Instagram",
    images: [project2_img],
    codeLink: "https://github.com/Swechchha791/Instagram_clone",
    previewLink: "https://social-hub-app.vercel.app",
  },
  {
    id: 3,
    name: "Shop-at-home",
    description: "Ecommerce website created using MERN technologies",
    images: [project3_img],
    codeLink: "https://github.com/Swechchha791/Ecommerce-mern-Shop-at-home",
    previewLink: "https://ecommerce-mern-shop-at-home.vercel.app",
  },
  {
    id: 4,
    name: "India-info",
    description:
      "A static website providing a comprehensive overview of India.",
    images: [project4_img],
    codeLink: "https://github.com/Swechchha791/India-info",
    previewLink: "https://india-info.vercel.app",
  },
  {
    id: 5,
    name: "Guessing-number-game",
    description:
      "Simple Guessing-no-game created using HTML CSS and javascript",
    images: [project5_img],
    codeLink: "https://github.com/Swechchha791/Guessing-number-game",
    previewLink: "https://guessing-number-game-nine.vercel.app",
  },
  {
    id: 6,
    name: "Image-Searcher",
    description: "A static website where you can search your desired images",
    images: [project6_img],
    codeLink: "https://github.com/Swechchha791/Search-desired-images",
    previewLink: "https://search-desired-images.vercel.app",
  },
];

const ProjectSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const borderVariants = {
    hidden: { width: 0 },
    visible: {
      width: "150px",
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1,
      },
    },
  };

  return (
    // bg-gradient-to-r from-[#00c6c6] to-[#2eb9e8] bg-opacity-50 shadow-4xl-sky
    <motion.section
      className="relative my-12 py-8 px-4 bg-gradient-to-bl from-sky-500 via-sky-800 to-orange-200  bg-opacity-50 shadow-4xl-sky"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
      }}
      id="projects"
    >
      {/* <div className="absolute inset-0  bg-sky-100 rounded-tr-full rounded-bl-full h-full"></div> */}

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-sky-200 text-center my-10 relative"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
        >
          Projects
          <motion.div
            variants={borderVariants}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-200"
            style={{ marginTop: "-10px", width: "100%" }}
          />
        </motion.h2>

        <Projects projects={projects} />

        {/* <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              className="p-6 relative container mx-auto object-cover w-full h-full"
              key={project.id}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div> */}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
