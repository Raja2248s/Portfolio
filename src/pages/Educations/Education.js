import React from "react";
import { IoIosSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details{" "}
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shri Ramdeobaba College of Engineering and Management, Nagpur
            </h4>
            <p>CGPA : 8.52</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary School Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bhalerao Junior College Savner
            </h4>
            <p>Percentage : 92.08%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary School Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              St.John Mission High School Savner
            </h4>
            <p>Percentage : 92.60%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
