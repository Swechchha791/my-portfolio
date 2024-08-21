import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import internCert from "../assets/internCert.png";
import PragatiCert from "../assets/PragatiCert.png";
import PragatiPdf from "../assets/PragatiCert.pdf";

const certificates = [
  {
    title: "Infosys Springboard Summer Internship Pragram",
    organization: "Infosys Limited",
    image: internCert,
    pdf: internCert,
    description: `Project: EasyQ- AI Based Question and Answer generator tool Key. Technologies:- Angular, NodeJs,MongoDB, ExpressJs, TypeScript. Focused on developing Testimonial and About Us pages for a real-life project and collaborated with team members and experienced mentors.`,
  },
  {
    title: "Pragati: Path to Future - Cohort 1",
    organization: "Infosys Limited",
    image: PragatiCert,
    pdf: PragatiPdf,
    description: `The Pragati Program is a transformative initiative designed specifically for women, empowering them with essential skills and personal development tools. It focuses on boosting confidence and creating new opportunities for success.`,
  },
];

const Certificates = () => {
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
    <section id="certificates" className="py-16 bg-slate-200">
      <div className="container mx-auto px-4">
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
          Certificates
          <motion.div
            variants={borderVariants}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
            style={{ marginTop: "-10px", width: "100%" }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 hover:cursor-pointer">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="bg-sky-50 shadow-lg px-6 py-12 hover:shadow-2xl transition duration-500 rounded-3xl border-l-8 border-sky-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-sky-800">
                {certificate.title}
              </h3>
              <p className="text-gray-600 mb-2">{certificate.organization}</p>
              <p className="text-gray-500 mb-4">{certificate.description}</p>
              {certificate.image && (
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-semibold hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
