import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skill_vdo from "../assets/skills-vdo.mp4";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [openSection, setOpenSection] = useState(null);

  // Control animations based on whether the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Toggle the visibility of the section content
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Frontend Skills",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ReactJS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Skills",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "Github", "Webpack", "Jira"],
    },
    {
      title: "Other",
      skills: [
        "DSA Fundamental using java",
        "TypeScript",
        "Redux",
        "Next.js",
        "SDLC",
      ],
    },
  ];

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
    <motion.section
      ref={ref}
      className="my-16 py-10 bg-slate-50"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      id="skills"
    >
      <motion.h2
        className="text-4xl font-extrabold text-sky-800 text-center my-10 md:my-6 relative"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        Skills
        <motion.div
          variants={borderVariants}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
          style={{ marginTop: "-10px", width: "100%" }}
        />
      </motion.h2>

      <div className="w-full max-w-full flex flex-col md:flex-row items-center justify-between mx-auto">
        <motion.div
          className="text-white bg-white text-bold text-lg p-10 relative container mx-4 object-cover z-0 w-full h-full shadow-2xl rounded-2xl "
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
          }}
        >
          {sections.map((section) => (
            <motion.div
              key={section.title}
              className="my-6 relative z-10 shadow-xl rounded"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="w-full text-left font-bold p-4 rounded-lg focus:outline-none bg-gradient-to-r from-[#24aaaa] to-[#00698d] hover:from-[#00698d] hover:to-[#24aaaa] transition-all duration-500"
                onClick={() => toggleSection(section.title)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.title}
              </motion.button>
              <AnimatePresence initial={false}>
                {openSection === section.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="p-4"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {section.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="bg-sky-800 p-2 rounded-lg text-center"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className="w-full h-full mt-4 md:mt-0 md:ml-8 mix-blend-multiply"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0, transition: { duration: 4 } },
          }}
        >
          <motion.video
            ref={ref}
            src={skill_vdo}
            alt="home-video"
            className="object-cover z-0 w-full h-full"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 4 } },
            }}
            autoPlay
            loop
            muted
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
