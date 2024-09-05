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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate enim culpa ab suscipit, voluptate perferendis rem quas
              odio aliquam fugiat tempore error consequatur illo similique, esse
              ea minus quidem quam accusantium? Molestias, assumenda voluptatum
              repellendus officiis dolor accusamus deleniti consectetur
              voluptatibus beatae qui maxime quas porro, maiores omnis magni
              facere impedit? Ducimus omnis quos aut eveniet, nam reiciendis
              tempora, quam nisi inventore voluptas iste voluptatibus, modi
              delectus autem voluptatum? Voluptas molestiae accusamus cum
              provident unde amet accusantium consectetur at reprehenderit
              praesentium, reiciendis cumque, nihil officiis quibusdam
              repellendus consequatur. Eveniet autem facilis ipsa temporibus
              sapiente aliquid accusamus ipsum ipsam odio ut?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
