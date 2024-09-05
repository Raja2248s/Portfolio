import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Internship.css";

const Internship = () => {
  return (
    <>
      <div className=" internship" id="internship">
        <div className=" container internship-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Internship Details{" "}
          </h2>
          <hr />
          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #138781",
              }}
              date="March 2024 - June 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaLaptopCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Java Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Infosys Springboard
              </h4>
              <p>
                Backend Development (Java Springboot, MySQL, REST APIs),
                Frontend Development (AngularJs, Bootstrap),Email Integration
                (EmailJS), User Authentication & Security, Project Management,
                Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Internship;
