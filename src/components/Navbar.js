// import React from "react";
import React, { useState } from "react";
import "../styles/navbar.css";
// import { toggleNavbar } from "../utils/script";

// importing images
import logo from "../images/logo.png";
// import logo from "../images/Rectangle.png";
// importing images

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className={`navbar ${isMobileNavOpen ? "responsive" : ""}`}>
      <div className="logo">
        <a href="/#">
          <img className="nav-logo" src={logo} alt="Logo" />
        </a>
      </div>
      <a
        href="/#"
        onClick={toggleMobileNav}
        className={`icon ${isMobileNavOpen ? "active" : ""}`}
      >
        &#9776;
      </a>
      <div className={`nav-items ${isMobileNavOpen ? "show" : ""}`}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Services</a>
        <a href="/#">Upcoming Packages</a>

        <button className="nav-button">Get in Touch</button>
      </div>
    </nav>
  );
}

export default Navbar;
