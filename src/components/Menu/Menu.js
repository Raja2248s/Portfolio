import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import photo from "../../assests/images/profile.jpeg";
import "./menu.css";

const Menu = ({ toggle }) => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const zoomIn = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      {toggle ? (
        <>
          <motion.div
            className="navbar-profile-pic"
            variants={zoomIn}
            initial="hidden"
            animate="visible"
          >
            <img src={photo} alt="profile photo" />
          </motion.div>

          <motion.div
            className="nav-items"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10473/10473299.png"
                    width={30}
                    alt="home"
                  />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/about-9170946-7475532.png"
                    width={30}
                    alt="about"
                  />
                  About
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/education-6624965-5522882.png?f=webp"
                    width={35}
                    alt="education"
                  />
                  Education
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/computer-science-6815579-5602744.png?f=webp"
                    width={35}
                    alt="tech stack"
                  />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/project-management-6834526-5602816.png?f=webp"
                    width={40}
                    alt="project"
                  />
                  Project
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="internship"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/011/650/903/original/working-3d-render-icon-illustration-png.png"
                    width={30}
                    alt="experience"
                  />
                  Internship
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/testimonial-message-6126764-5043982.png?f=webp"
                    width={30}
                    alt="contact"
                  />
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10473/10473299.png"
                    width={30}
                    alt="home"
                  />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/about-9170946-7475532.png"
                    width={30}
                    alt="about"
                  />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/education-6624965-5522882.png?f=webp"
                    width={35}
                    alt="education"
                  />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/computer-science-6815579-5602744.png?f=webp"
                    width={35}
                    alt="tech stack"
                  />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/project-management-6834526-5602816.png?f=webp"
                    width={40}
                    alt="project"
                  />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="internship"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/011/650/903/original/working-3d-render-icon-illustration-png.png"
                    width={30}
                    alt="experience"
                  />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/testimonial-message-6126764-5043982.png?f=webp"
                    width={30}
                    alt="contact"
                  />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
