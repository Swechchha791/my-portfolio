import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]); // Array of refs

  return (
    <div className="relative p-4">
      <motion.div
        className="relative p-4 bg-gradient-animated text-white rounded-tr-[130px] rounded-bl-[130px] shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          key={project.id}
          className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-1000 rounded-tr-[120px] rounded-bl-[120px]"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          ref={(el) => (cardRefs.current[index] = el)} // Attach ref to each card
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setSelectedProject(project)}
        >
          <img
            src={project.images[0]}
            alt={project.name}
            className="object-cover w-full h-80 rounded-lg"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-500 hover:bg-opacity-70 hover:backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
            }}
          >
            <motion.h3
              className="text-2xl font-semibold text-white opacity-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 50,
              }}
              exit={{ y: 50, opacity: 0 }}
            >
              {project.name}
            </motion.h3>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Model with image slider and project info */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative pt-8 bg-slate-200 rounded-lg overflow-hidden max-w-6xl min-h-96 w-full p-4"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
            >
              <button
                className="absolute top-0 right-0 text-2xl font-bold text-white bg-black opacity-60 px-2 hover:opacity-80 rounded-full z-50"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-90">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.name}
                  className="w-full max-w-4xl h-full rounded-lg shadow-2xl"
                />
                <div className="flex flex-col items-center justify-center p-4">
                  <h3 className="text-2xl font-bold text-sky-800">
                    {selectedProject.name}
                  </h3>
                  <p className="mt-2 text-gray-700">
                    {selectedProject.description}
                  </p>
                  <div className="mt-4 flex gap-10 justify-between">
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="outline-none px-4 py-2 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-700 transition duration-300">
                        Code
                      </button>
                    </a>
                    <a
                      href={selectedProject.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="outline-none px-4 py-2 bg-emerald-500 text-white rounded-lg shadow-md hover:bg-emerald-700 transition duration-300">
                        Preview
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import { motion, AnimatePresence } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProjectSlider = ({ projects }) => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const cardRefs = useRef([]); // Array of refs

//   // const settings = {
//   //   dots: false,
//   //   infinite: true,
//   //   speed: 1000,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 1,
//   //   centerMode: true,
//   //   centerPadding: "0",
//   //   responsive: [
//   //     {
//   //       breakpoint: 1024,
//   //       settings: {
//   //         slidesToShow: 2,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 600,
//   //       settings: {
//   //         slidesToShow: 1,
//   //       },
//   //     },
//   //   ],
//   // };

//   return (
//     <div className="relative p-4">
//       {/* <Slider {...settings}> */}
//       {projects.map((project, index) => (
//         <div key={project.id} className="p-2">
//           <motion.div
//             className="cursor-pointer relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-110 rounded-tr-[90px] rounded-bl-[90px]"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setSelectedProject(project)}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             ref={(el) => (cardRefs.current[index] = el)} // Attach ref to each card
//           >
//             <img
//               src={project.images[0]}
//               alt={project.name}
//               className="object-cover w-full h-80 rounded-tr-[90px] rounded-bl-[90px]"
//             />
//             {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-500 hover:bg-opacity-50 hover:backdrop-blur-sm rounded-tr-[90px] rounded-bl-[90px]"> */}
//             <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center transition-all duration-500 bg-opacity-50 backdrop-blur-sm rounded-tr-[90px] rounded-bl-[90px] bg-gradient-to-t from-slate-600 to-transparent h-1/2">
//               <motion.h3
//                 className="text-3xl font-semibold text-white opacity-0 transition-opacity duration-500"
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{
//                   opacity: hoveredIndex === index ? 1 : 0,
//                   y: hoveredIndex === index ? 0 : 50,
//                 }}
//                 exit={{ y: 50, opacity: 0 }}
//                 ref={cardRefs.card}
//               >
//                 {project.name}
//               </motion.h3>
//             </div>
//           </motion.div>
//         </div>
//       ))}
//       {/* </Slider> */}

//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative pt-8 bg-slate-200 rounded-lg overflow-hidden max-w-6xl min-h-96 w-full p-4"
//               initial={{ y: "100vh" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100vh" }}
//             >
//               <button
//                 className="absolute top-1 right-2 text-3xl font-bold text-white bg-black opacity-60 px-2 hover:opacity-80 rounded-full"
//                 onClick={() => setSelectedProject(null)}
//               >
//                 &times;
//               </button>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-80">
//                 <img
//                   src={selectedProject.images[0]}
//                   alt={selectedProject.name}
//                   className="w-full max-w-4xl h-full rounded-lg shadow-2xl"
//                 />
//                 <div className="flex flex-col items-center justify-center p-4">
//                   <h3 className="text-2xl font-bold text-sky-800">
//                     {selectedProject.name}
//                   </h3>
//                   <p className="mt-2 text-gray-700">
//                     {selectedProject.description}
//                   </p>
//                   <div className="mt-4 flex gap-10 justify-between">
//                     <a
//                       href={selectedProject.codeLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <button className="outline-none px-4 py-2 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-700 transition duration-300">
//                         Code
//                       </button>
//                     </a>
//                     <a
//                       href={selectedProject.previewLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <button className="outline-none px-4 py-2 bg-emerald-500 text-white rounded-lg shadow-md hover:bg-emerald-700 transition duration-300">
//                         Preview
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProjectSlider;
