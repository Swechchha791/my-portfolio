import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer
import about_img from "../assets/about-page-img2.png"; // updated the about picture

const About = () => {
  const controls = useAnimation(); // Create animation controls
  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to trigger the animation every time the component is in view
    threshold: 0.1, // Threshold to trigger the animation when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start the "visible" animation when the component is in view
    } else {
      controls.start("hidden"); // Start the "hidden" animation when the component leaves the viewport
    }
  }, [controls, inView]); // Dependency array to trigger useEffect on changes to controls or inView

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
      className="my-20 py-8 px-2"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      id="about"
    >
      <motion.h2
        className="text-4xl font-extrabold text-sky-800 text-center my-16 relative"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        About Me
        <motion.div
          variants={borderVariants}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
          style={{ marginTop: "-10px", width: "100%" }}
        />
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-around mx-4">
        <motion.div
          ref={ref}
          className="w-full h-full mix-blend-multiply" //mt-4 md:mt-0 md:ml-8
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0, transition: { duration: 2 } },
          }}
        >
          <motion.img
            ref={ref}
            src={about_img}
            alt="home-img"
            className="object-cover z-0 rounded-3xl"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
            }}
          />
        </motion.div>

        <div className="lg:mr-8">
          <motion.p
            className="mt-12 lg:px-8 md:mt-0 text-lg font-medium text-slate-500 leading-10 tracking-wider lg:text-justify text-left"
            style={{ textIndent: "2em" }}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            My name is <strong className="text-sky-800">Swechchha</strong>, a
            Passionate{" "}
            <strong className="text-sky-800">React frontend developer</strong>{" "}
            with a passion for crafting dynamic and responsive web applications.
            My journey has been fueled by a relentless drive to learn and
            innovate. After graduating, I had the privilege of completing the
            Springboard Summer Internship with Infosys Private Limited, where I
            honed my skills and gained a deeper understanding of web
            technologies.
            <br />
            Following a brief career gap, I have fully immersed myself in
            upskilling with a focus on MERN development, aiming to master the
            full stack. I am now eager to bring my expertise to real-world
            projects, contributing to teams where I can both learn from seasoned
            professionals and make a meaningful impact. My commitment to
            continuous improvement, coupled with my enthusiasm for web
            development, positions me as a valuable asset to any
            forward-thinking team.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

{
  /* <motion.div
            ref={ref} // Reference for the inView hook
            className="w-full h-full"
            initial="hidden" // Initial state
            animate={controls} // Animation controls
            variants={{
              hidden: { opacity: 0, x: 70 }, // Hidden state with opacity 0 and x-axis offset
              visible: { opacity: 1, x: 0, transition: { duration: 2 } }, // Visible state with transition duration of 2 seconds
            }}
          >
            <img
              src={home_img}
              alt="home-img"
              className="object-cover z-0 w-full h-full hover:animate-none md:mx-20 sm:my-10"
            />
          </motion.div> */
}

{
  /* <section
  className="my-8 py-8 px-4"
  // style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
>
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mx-auto">
    <div>
      <motion.h2
        className="text-3xl font-bold mb-4 transition-colors duration-500 gradient-text"
        initial="hidden" // Initial state
        animate={controls} // Animation controls
        variants={{
          hidden: { opacity: 0 }, // Hidden state
          visible: { opacity: 1, transition: { duration: 1 } }, // Visible state with transition duration of 1 second
        }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="transition-colors duration-500 mt-4 md:mt-0 md:ml-8 text-xl p-4"
        initial="hidden" // Initial state
        animate={controls} // Animation controls
        variants={{
          hidden: { opacity: 0 }, // Hidden state with opacity 0
          visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.5 },
          }, // Visible state with transition duration of 0.8 seconds and a delay of 0.5 seconds
        }}
      >
        My name is Swechchha, and I'm a React frontend developer. I have a
        strong passion for creating dynamic and responsive web applications. My
        journey in web development has been fueled by a continuous desire to
        learn and improve my skills. I have worked on various projects that have
        helped me grow both personally and professionally. <br />
        Currently, I am working on various projects to enhance my skills and
        knowledge.
      </motion.p>
    </div>

    <motion.div
      ref={ref}
      className="w-full h-full" //md:ml-40
      initial="hidden"
      transition={{ duration: 2 }}
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: 70 }, // Hidden state with opacity 0 and x-axis offset
        visible: { opacity: 1, x: 0, transition: { duration: 2 } }, // Visible state with transition duration of 2 seconds
      }}
    >
      <img
        src={home_img}
        alt="home-img"
        className="object-cover z-0 w-full h-full hover:animate-none sm:my-10" //md:mx-20
      />
    </motion.div>
  </div>
</section>; */
}
