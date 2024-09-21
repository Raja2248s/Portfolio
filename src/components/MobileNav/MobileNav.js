import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-scroll";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handleopen

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuclick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <RiMenuFold2Line
              size={30}
              onClick={handleOpen}
              className="mobile-nav-icon"
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              onClick={handleOpen}
              className="mobile-nav-icon"
            />
          )}
          <span className="mobile-nav-title">MY Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuclick}
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
                  onClick={handleMenuclick}
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
                  onClick={handleMenuclick}
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
                  onClick={handleMenuclick}
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
                  onClick={handleMenuclick}
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
                  onClick={handleMenuclick}
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
                  onClick={handleMenuclick}
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
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
