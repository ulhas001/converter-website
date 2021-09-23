import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">
            C O N V E R T I F Y
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
