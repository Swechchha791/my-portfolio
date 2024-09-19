import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  AiOutlineMail,
  AiFillLinkedin,
  // AiOutlineWhatsApp,
  // AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
// import contactImg from "";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  // console.log(USER_ID);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_USER_ID } = import.meta.env;

    // Object that contains dynamic templates params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Swechchha",
      message: message,
    };

    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, templateParams, VITE_USER_ID)
      .then(() => {
        // console.log(response);
        alert("Message sent Successfully!");
        // form.current.reset();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error.text);
        alert("There was an error sending your message");
      });
  };

  // emailjs
  //   .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_USER_ID)
  //   .then(
  //     (result) => {
  //       alert("Message sent successfully!");
  //       form.current.reset();
  //     },
  //     (error) => {
  //       console.log(error.text);
  //       alert("There was an error sending your message.");
  //     }
  //   );

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 2,
      },
    },
  };

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
    <section className="my-10 py-8" id="contact">
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
        Contact me
        <motion.div
          variants={borderVariants}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
          style={{ marginTop: "-10px", width: "100%" }}
        />
      </motion.h2>

      {/* <motion.h2
        className="text-4xl font-extrabold text-sky-800 text-center my-16 relative"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        Contact me
        <motion.div
          variants={borderVariants}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-sky-800"
          style={{ marginTop: "-10px", width: "100%" }}
        />
      </motion.h2> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col md:flex-row items-center justify-around mx-auto"
      >
        {/* Contact form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 p-10 mx-2 my-10 bg-sky-100 shadow-2xl rounded-r-3xl border-l-8 border-sky-900"
        >
          <h3 className="text-3xl font-bold mb-6 text-center text-sky-800">
            Get in Touch
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 transition-all duration-1000"
            ref={form}
          >
            <div>
              <label className="block text-md font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-2">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your Message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-800 text-white rounded-md hover:bg-sky-900 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social links */}
        <div className="flex flex-col items-center md:items-start md:mr-20 my-10 md:my-0">
          <div className="space-y-4 font-semibold">
            {/* Email link */}
            <a
              href="mailto:swechchhapandey271@gmail.com"
              className="flex items-center px-20 py-2 bg-red-100 hover:bg-red-300 transition-all duration-700 shadow-xl rounded-3xl"
            >
              <AiOutlineMail className="text-3xl mr-2 text-red-700" />
              <span>Gmail</span>
            </a>

            {/* Github link */}
            <a
              href="https://github.com/Swechchha791"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-20 py-2 bg-gray-200 hover:bg-gray-400 rounded-3xl transition-all duration-700 shadow-xl"
            >
              <AiFillGithub className="text-3xl mr-2 text-slate-700" />
              <span>Github</span>
            </a>
            {/* Linkedin link */}
            <a
              href="https://www.linkedin.com/in/km-swechchha-7495a0324"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-20 py-2 bg-blue-100 hover:bg-blue-300 rounded-3xl transition-all duration-700 shadow-xl"
            >
              <AiFillLinkedin className="text-3xl mr-2 text-blue-700" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
