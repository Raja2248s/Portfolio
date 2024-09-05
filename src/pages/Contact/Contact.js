import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://media.istockphoto.com/id/1452771551/vector/contact-us-button-with-cursor-pointer-click-vector-web-button.jpg?s=612x612&w=0&k=20&c=IGWQ-VhsNAnZyKnuWhggHhpozUiuFRq5jd-rJ7-KqIc="
                    alt="econtact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with
                      <FaLinkedin
                        color="rgb(10, 102, 194)"
                        size={30}
                        className="ms-2"
                      />
                      <FaGithub size={30} className="ms-2" />
                      <FaFacebook
                        color="rgb(24,119,242)"
                        size={30}
                        className="ms-2"
                      />
                      <FaInstagramSquare
                        color="rgb(225 ,48, 108)"
                        size={30}
                        className="ms-2"
                      />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Write you Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Write you Email"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write you Message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
