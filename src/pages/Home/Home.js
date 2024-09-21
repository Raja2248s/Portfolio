import { motion } from "framer-motion";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import Typewriter from "typewriter-effect";
import resume from "../../assests/docs/GauravSinghResume.pdf";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const fadeInRight = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <IoMoonOutline size={30} />
          ) : (
            <MdSunny color="yellow" size={30} />
          )}
        </div>
        <div className="container home-content">
          <motion.h2
            initial={fadeInRight.initial}
            animate={fadeInRight.animate}
            transition={fadeInRight.transition}
          >
            Hi👋 I'm a{" "}
          </motion.h2>
          <motion.h1
            initial={fadeInRight.initial}
            animate={fadeInRight.animate}
            transition={fadeInRight.transition}
          >
            <Typewriter
              options={{
                strings: ["FullStack Developer!", "Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=9175094175"
              rel="noreferrer"
              target="_blank"
            >
              Hire me
            </a>

            <a href={resume} download="GauravResume.pdf" className="btn btn-cv">
              My resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
