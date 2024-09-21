import emailjs from "emailjs-com";
import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  ///Handle submit button
  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }

    const service_id = "service_ofumwpl";
    const template_id = "template_ne937y6";
    const user_id = "wMVIPTkz1aA4d9xZc";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: msg,
    };

    emailjs.send(service_id, template_id, templateParams, user_id).then(
      (response) => {
        toast.success("Message sent successfully!");
        setname("");
        setemail("");
        setmsg("");
      },
      (error) => {
        toast.error("Failed to send message, please try again.");
        console.error("EmailJS error:", error);
      }
    );
  };

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
                      <a
                        href="https://www.linkedin.com/in/gaurav-singh-73b9b91b3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          color="rgb(10, 102, 194)"
                          size={30}
                          className="contact-icons ms-2"
                        />
                      </a>
                      <a
                        href="https://github.com/Raja2248s"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={30} className=" contact-icons ms-2" />
                      </a>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook
                          color="rgb(24,119,242)"
                          size={30}
                          className="contact-icons ms-2"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagramSquare
                          color="rgb(225 ,48, 108)"
                          size={30}
                          className="contact-icons ms-2"
                        />
                      </a>
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
                      placeholder="Write your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Write your Email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your Message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setmsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handlesubmit}>
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
