import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Import your images
// import project1_img from "../assets/project1-img.png";
// import project2_img from "../assets/project2-img.png";
// import project3_img from "../assets/project3-img.png";
// import project4_img from "../assets/project4-img.png";
// import project5_img from "../assets/project5-img.png";
// import project6_img from "../assets/project6-img.png";

//   const images = [
//     { id: 1, src: project1_img, alt: "Slide 1" },
//     { id: 2, src: project2_img, alt: "Slide 2" },
//     { id: 3, src: project3_img, alt: "Slide 3" },
//     { id: 4, src: project4_img, alt: "Slide 4" },
//     { id: 5, src: project5_img, alt: "Slide 5" },
//     { id: 6, src: project6_img, alt: "Slide 6" },
//   ];

const Slider = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full max-w-8xl mx-auto overflow-hidden flex justify-center items-center ">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full py-40"
      >
        {projects?.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center">
            <div
              className="flex flex-col items-center scale-100 bg-slate-200 border-2 border-sky-700 rounded-lg p-4 transition-transform duration-500 ease-in-out hover:scale-125 hover:bg-orange-500 "
              style={{
                opacity: 0.8,
              }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.images}
                alt={project.name}
                className="w-full h-auto rounded-lg brightness-75 hover:brightness-100 transition-all duration-500"
              />
              {/* <button className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                Learn more
              </button> */}
              <h3 className="text-2xl font-bold text-teal-800 my-2">
                {project.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:h-80">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.name}
                  className="w-full max-w-4xl h-full rounded-lg shadow-2xl"
                />
                <div className="flex flex-col items-center justify-center p-4">
                  <h3 className="text-2xl font-bold text-sky-800">
                    {selectedProject.name}
                  </h3>
                  <p className="mt-2 text-gray-700 text-center">
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

export default Slider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

// // Install the Swiper modules
// // SwiperCore.use([Navigation]);

// import project1_img from "../assets/project1-img.png";
// import project2_img from "../assets/project2-img.png";
// import project3_img from "../assets/project3-img.png";
// import project4_img from "../assets/project4-img.png";
// import project5_img from "../assets/project5-img.png";
// import project6_img from "../assets/project6-img.png";

// const Slider = () => {
//   const images = [
//     { id: 1, src: project1_img, alt: "Slide 1" },
//     { id: 2, src: project2_img, alt: "Slide 2" },
//     { id: 3, src: project3_img, alt: "Slide 3" },
//     { id: 4, src: project4_img, alt: "Slide 4" },
//     { id: 5, src: project5_img, alt: "Slide 5" },
//     { id: 6, src: project6_img, alt: "Slide 6" },
//   ];

//   return (
//     <div className="relative w-full max-w-6xl mx-auto overflow-hidden flex justify-center items-center">
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={30}
//         slidesPerView={3}
//         centeredSlides={true}
//         navigation
//         loop={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//         className="w-full"
//       >
//         {images.map((image) => (
//           <SwiperSlide key={image.id} className="flex justify-center">
//             <div
//               className="flex flex-col items-center scale-90 bg-gray-200 rounded-lg p-4 transition-transform duration-500 ease-in-out hover:scale-110 hover:bg-orange-500 hover:text-white"
//               style={{
//                 opacity: 0.8,
//               }}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-auto rounded-lg brightness-75 hover:brightness-100 transition-all duration-500"
//               />
//               <button className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
//                 Learn more
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

// import React, { useState, useEffect } from "react";
// import { MdArrowBackIos } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";

// import project1_img from "../assets/project1-img.png";
// import project2_img from "../assets/project2-img.png";
// import project3_img from "../assets/project3-img.png";
// import project4_img from "../assets/project4-img.png";
// import project5_img from "../assets/project5-img.png";
// import project6_img from "../assets/project6-img.png";

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     {
//       id: 1,
//       src: project1_img,
//       alt: "Slide 1",
//     },
//     {
//       id: 2,
//       src: project2_img,
//       alt: "Slide 2",
//     },
//     {
//       id: 3,
//       src: project3_img,
//       alt: "Slide 3",
//     },
//     {
//       id: 4,
//       src: project4_img,
//       alt: "Slide 4",
//     },
//     {
//       id: 5,
//       src: project5_img,
//       alt: "Slide 5",
//     },
//     {
//       id: 6,
//       src: project6_img,
//       alt: "Slide 6",
//     },
//     {
//       id: 7,
//       src: project6_img,
//       alt: "Slide 7",
//     },
//     {
//       id: 8,
//       src: project6_img,
//       alt: "Slide 8",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextSlide, 5000); // change slide every 5 seconds

//     return () => clearInterval(intervalId); // cleanup on unmount
//   }, []);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden flex justify-center items-center">
//       <div className="flex justify-center transition-all duration-500 ease-in-out">
//         {images.map((image, index) => {
//           const isCurrent = index === currentIndex;
//           const isPrev =
//             index === (currentIndex - 1 + images.length) % images.length;
//           const isNext = index === (currentIndex + 1) % images.length;

//           return (
//             <div
//               key={image.id}
//               className={`flex flex-col items-center transition-transform duration-500 ease-in-out ${
//                 isCurrent
//                   ? "scale-110 bg-orange-500 text-white"
//                   : "scale-90 bg-gray-200"
//               } rounded-lg p-4 mx-2`}
//               style={{
//                 opacity: isCurrent ? 1 : 0.5,
//               }}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-auto rounded-lg"
//               />
//               <button className="mt-2 p-2 bg-blue-500 text-white rounded">
//                 Learn more
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg"
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Slider;
