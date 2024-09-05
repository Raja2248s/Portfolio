import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Home from "../../pages/Home/Home";
import Menu from "../Menu/Menu";
import "./Layout.css";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  // change toggle

  const handletoggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handletoggle}>
              {toggle ? (
                <AiFillCaretLeft size={30} />
              ) : (
                <AiFillCaretRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
