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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores
          voluptate totam quod, error blanditiis, ea omnis inventore expedita
          cum iure. Ut repellendus itaque, atque facilis impedit laborum
          expedita modi cupiditate iusto sit odio alias architecto perspiciatis
          a amet vel rem error voluptas. Quo maiores, eaque quas eum dolor quasi
          pariatur, unde enim natus similique error. Maiores cumque veritatis
          dolores, consequatur debitis tempora voluptate,
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
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
                  <h6>Shopping app</h6>{" "}
                </div>
              </div>
              <a href="#" className="ads-btn">
                View
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Android Development</span>
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
                  <h6>Ecommerce app</h6>{" "}
                </div>
              </div>
              <a href="#" className="ads-btn">
                View
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
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
                  <h6>Shopping app</h6>{" "}
                </div>
              </div>
              <a href="#" className="ads-btn">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
