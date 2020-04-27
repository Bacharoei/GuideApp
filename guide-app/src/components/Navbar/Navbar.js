import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guides" className="nav-link link">
              Guides
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/services" className="nav-link link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
