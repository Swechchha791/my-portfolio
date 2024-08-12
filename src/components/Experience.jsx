import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import codeImg from "../assets/code-img.png";

const experiences = [
  {
    title: "Infosys Springboard Summer Internship",
    company: "Infosys Limited",
    duration: "Jan 2023 - May 2023",
    description:
      "Project: EasyQ - AI-based Question and Answer generator tool using Angular, Node.js, MongoDB, Express.js, and TypeScript.",
  },
  {
    title: "Web Development Training from Arudan Technology Pvt. Ltd",
    company: "Arudan Technology Pvt. Ltd",
    duration: "Dec 2021 - Jun 2022",
    description:
      "Learned the basics of web development. Technologies - HTML, CSS, JS, Basics of MERN stack.",
  },
  // {
  //   title: "Intern",
  //   company: "Tech Solutions",
  //   duration: "Jan 2021 - May 2021",
  //   description:
  //     "Assisted in developing internal tools using JavaScript and React.",
  // },
];

const Experience = () => {
  const settings = {
    // dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="py-12 my-10"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
      }}
      id="experience"
    >
      <motion.h2
        className="text-4xl font-extrabold text-sky-800 text-center my-16  relative"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: { x: 1, opacity: 1, transition: { duration: 2 } },
        }}
      >
        Experience
        <motion.div
          variants={borderVariants}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
          style={{ marginTop: "-10px", width: "100%" }}
        />
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div
          className="relative"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 1, opacity: 1, transition: { duration: 2 } },
          }}
        >
          <img
            src={codeImg}
            alt="Experience"
            className="w-full h-full object-cover mt-10"
          />
        </motion.div>
        <motion.div
          className="flex flex-row items-center justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 80, opacity: 0 },
            visible: { x: 1, opacity: 1, transition: { duration: 3 } },
          }}
        >
          <div className="p-8 mx-2 rounded-xl bg-transparent w-full h-full relative shadow-2xl">
            {/* bg-gradient-to-tl from-sky-400 from-10% via-sky-700 via-30% to-sky-400 to-90% */}
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              {experiences.map((exp, index) => (
                // border-2 border-sky-500 shadow-4xl-sky
                <div
                  key={index}
                  className="py-4 md:pt-6 px-4 bg-sky-100 rounded-lg text-md transition-all duration-700 cursor-pointer md:h-48 h-60 w-full overflow-hidden object-cover"
                >
                  <h3 className="text-xl font-bold text-sky-800">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="mt-2 text-sm text-gray-600">{exp.duration}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </Slider>
            <div className="flex flex-row items-center justify-between mx-4 mt-4">
              <button
                className="outline-none px-4 py-1 hover:text-white rounded-xl border-2 border-sky-500 text-2xl font-extrabold shadow-3xl-sky hover:bg-gradient-to-tl from-sky-400 from-10% via-sky-600 via-30% to-sky-400 to-90% transition-all duration-1000"
                onClick={previous}
              >
                <MdArrowBackIos />
              </button>
              <button
                className="outline-none px-4 py-1 hover:text-white rounded-xl border-2 border-sky-500 text-2xl font-bold shadow-3xl-sky hover:bg-gradient-to-tl from-sky-400 from-10% via-sky-600 via-30% to-sky-400 to-90% transition-all duration-1000"
                onClick={next}
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import codeImg from "../assets/code-img.png";
// import { useInView } from "react-intersection-observer";
// import Slider from "react-slick";

// const experiences = [
//   {
//     title: "Infosys Springboard Summer Internship",
//     company: "Infosys Limited",
//     duration: "Jan 2023 - May 2023",
//     description:
//       "Project: EasyQ - AI-based Question and Answer generator tool using Angular, Node.js, MongoDB, Express.js, and TypeScript.",
//   },
//   {
//     title: "Frontend Developer",
//     company: "XYZ Ltd",
//     duration: "Jun 2021 - Dec 2022",
//     description: "Built responsive UI components using React and Tailwind CSS.",
//   },
//   {
//     title: "Intern",
//     company: "Tech Solutions",
//     duration: "Jan 2021 - May 2021",
//     description:
//       "Assisted in developing internal tools using JavaScript and React.",
//   },
// ];

// const Experience = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true, // Enable arrows for navigation
//   };

//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   return (
//     <section
//       className="py-12 my-10 text-white"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 2 } },
//       }}
//     >
//       <motion.h2
//         className="text-5xl font-extrabold gradient-text m-10 md:text-center"
//         initial={{ opacity: 0, y: -80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2 }}
//       >
//         Experience
//       </motion.h2>
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//         <motion.div
//           className="relative"
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { x: -80, opacity: 0 },
//             visible: { x: 1, opacity: 1, transition: { duration: 2 } },
//           }}
//         >
//           <img
//             src={codeImg}
//             alt="Experience"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </motion.div>
//         <div className="relative flex items-center">
//           <motion.div
//             className="p-6 bg-transparent w-full h-full my-auto mx-2 rounded-lg"
//             initial="hidden"
//             animate={controls}
//             variants={{
//               hidden: { x: 80, opacity: 0 },
//               visible: { x: 1, opacity: 1, transition: { duration: 2 } },
//             }}
//           >
//             <Slider {...settings}>
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   className={`p-3 mb-6 rounded-3xl text-white border-2 border-sky-500 font-medium bg-gradient-to-tl from-sky-400 via-sky-700 to-sky-400 transition-all duration-700 hover:scale-125 cursor-pointer ${
//                     index % 2 === 0 ? "mr-4 md:mr-10" : "ml-4 md:ml-10"
//                   }`}
//                   initial="hidden"
//                   animate={controls}
//                   variants={{
//                     hidden: {
//                       x: index % 2 === 0 ? 80 : -80,
//                       opacity: 0,
//                     },
//                     visible: {
//                       x: 1,
//                       opacity: 1,
//                       transition: { duration: 4 },
//                     },
//                   }}
//                 >
//                   <h3 className="text-xl font-bold">{exp.title}</h3>
//                   <p className="text-gray-200">{exp.company}</p>
//                   <p className="mt-2 text-sm text-gray-200">{exp.duration}</p>
//                   <p className="mt-4 text-sm">{exp.description}</p>
//                 </motion.div>
//               ))}
//             </Slider>
//           </motion.div>
//           {/* <div className="absolute inset-0 left-1/2 transform translate-x-1/2 w-1 bg-sky-700"></div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
