import React from "react";
import photo from "../../assests/images/profile.jpeg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={photo} alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me </h1>
            <p>
              I’m Gaurav Singh, a dedicated Computer Science student at Shri
              Ramdeobaba College of Engineering and Management, with a passion
              for full-stack development and cutting-edge technologies. Through
              internships like my stint as a Java Developer at Infosys
              Springboard, I've gained hands-on experience in building dynamic
              web applications using frameworks like AngularJS, Java Spring
              Boot, and MongoDB. My projects range from creating secure,
              real-time chat applications to developing interactive games using
              Python. With strong problem-solving skills and a drive to
              innovate, I’m always eager to take on new challenges and create
              impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
