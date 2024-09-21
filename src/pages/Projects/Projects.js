import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects{" "}
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have worked on several innovative projects that showcase my
          technical skills and creativity. One notable project is a Multi-Client
          Realtime Chat Application built with the MERN stack, where I directed
          its development to ensure secure and expressive communication
          features. This application includes advanced security measures, such
          as password hashing with bcrypt, and integrates real-time capabilities
          using Socket.io. Additionally, I developed a Space-Shooter Game using
          Python and the Pygame library, which highlights my proficiency in game
          development through dynamic gameplay and a heart-based life system.
          These projects reflect my commitment to creating impactful digital
          solutions and my ability to tackle complex challenges.
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-details-badge">Node</span>
                <span className="card-details-badge">Express</span>
                <span className="card-details-badge">React</span>
                <span className="card-details-badge">Mongodb</span>
              </div>

              <div className="card-body text-center">
                <div className="ads-tittle m-auto">
                  <h6>MultiClient Chat Application</h6>{" "}
                </div>
              </div>
              <a
                href="https://github.com/Raja2248s/web_chat_App"
                className="ads-btn"
              >
                Frontend
              </a>
              <a
                href="https://github.com/Raja2248s/Web_chat_app_Bckened"
                className="ads-btn"
              >
                Backend
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Full Stack Development
                </span>
                <img
                  src="https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-details-badge">Angular JS</span>
                <span className="card-details-badge">Java Springboot</span>
                <span className="card-details-badge">MYSQL</span>
                <span className="card-details-badge">EmailJs</span>
              </div>

              <div className="card-body text-center">
                <div className="ads-tittle m-auto">
                  <h6>Matrimonial app</h6>{" "}
                </div>
              </div>
              <a
                href="https://github.com/Raja2248s/Matrimonial_frontend"
                className="ads-btn"
              >
                Frontend
              </a>
              <a
                href="https://github.com/Raja2248s/New_Matrionial_Backend"
                className="ads-btn"
              >
                Backend
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
