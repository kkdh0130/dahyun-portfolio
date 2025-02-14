import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/common.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-black">
      <div className="container">
        <a className="navbar-brand" href="#home">
          KIMDAHYUN'S
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fas fa-bars"
            style={{ color: "#00ff00", fontSize: "20px", opacity: "0.6" }}
          ></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#stack">
                Stack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
