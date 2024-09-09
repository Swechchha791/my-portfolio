import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Slider from "react-slick";

const educationData = [
  {
    degree: "Bachelor in Computer Application (BCA)",
    institution: "Allahabad state University",
    fieldOfStudy: "Computer Application",
    location: "Prayagraj, Uttar Pradesh",
    graduationDate: "December 2022",
    cgpa: "8.5 CGPA",
  },
];

const Education = () => {
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

  // const sliderSettings = {
  //   speed: 500,
  //   dots: true,
  //   // infinite: true,
  //   // autoplay: true,
  //   // autoplaySpeed: 3000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  // };

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
      className="my-16 py-8 w-full h-1/2 "
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
      }}
      id="education"
    >
      <motion.h2
        className="text-4xl font-extrabold text-sky-800 my-20 text-center relative"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0.5, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
        }}
      >
        Education
        <motion.div
          variants={borderVariants}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
          style={{ marginTop: "-10px", width: "100%" }}
        />
      </motion.h2>

      <div className="relative flex md:flex-row flex-col items-center justify-center gap-12 bg-sky-900 py-10 px-6 font-medium">
        {/* <Slider {...sliderSettings}> */}
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            className="py-4 px-10 bg-transparent border-2 border-sky-600 rounded-2xl shadow-3xl text-white w-fit h-fit hover:bg-sky-600 hover:shadow-3xl-sky transition-all duration-1000 cursor-pointer"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
            }}
          >
            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
            <p className="text-lg">{education.institution}</p>
            <p className="text-sm text-gray-400">{education.location}</p>
            <p className="mt-2">{education.fieldOfStudy}</p>
            <p className="mt-2 text-sm text-gray-300">
              Graduation Date: {education.graduationDate}
            </p>
            {/* <p className="mt-2">Honors: {education.honors}</p> */}
            <ul className="mt-2">
              <p className="mt-2">Grad: {education.cgpa}</p>
              {/* {education.relevantCoursework.map((course, i) => (
                <span key={i} className="text-sm text-gray-300">
                  {course}
                  {", "}
                </span>
              ))} */}
            </ul>
          </motion.div>
        ))}
        {/* </Slider> */}
      </div>
    </motion.section>
  );
};

export default Education;
