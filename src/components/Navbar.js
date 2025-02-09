import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/common.css";
import AboutMe from "./AboutMe";
import Stack from "./Stack";
import Project from "./Project";
import Contact from "./Contact";
import Home from "./Home";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionElement = document.getElementById("home");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap responsive-layout">
          <div className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <ul className="nav flex-column mb-sm-auto mb-0" id="menu">
                <li className="nav-item">
                  <button className="nav-link align-middle px-0 btn retro-hover" onClick={() => handleNavigation("home")}>
                    <span className="ms-1 d-sm-inline">Home</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link align-middle px-0 btn retro-hover" onClick={() => handleNavigation("aboutme")}>
                    <span className="ms-1 d-sm-inline">About Me</span>
                  </button>
                </li>
                <li>
                  <button className="nav-link px-0 align-middle btn retro-hover" onClick={() => handleNavigation("stack")}>
                    <span className="ms-1 d-sm-inline">Stack</span>
                  </button>
                </li>
                <li>
                  <button className="nav-link px-0 align-middle btn retro-hover" onClick={() => handleNavigation("project")}>
                    <span className="ms-1 d-sm-inline">Project</span>
                  </button>
                </li>
                <li>
                  <button className="nav-link px-0 align-middle btn retro-hover" onClick={() => handleNavigation("contact")}>
                    <span className="ms-1 d-sm-inline">Contact</span>
                  </button>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col">
            <div id="home">{activeSection === "home" && <Home />}</div>
            <div id="aboutme">{activeSection === "aboutme" && <AboutMe />}</div>
            <div id="stack">{activeSection === "stack" && <Stack />}</div>
            <div id="project">{activeSection === "project" && <Project />}</div>
            <div id="contact">{activeSection === "contact" && <Contact />}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
