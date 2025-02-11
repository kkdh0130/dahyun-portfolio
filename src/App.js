import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./styles/common.css";
import "nes.css/css/nes.min.css";

function App() {
  return (
    <>
      <Navbar />
        <section id="home"><Home /></section>
        <section id="aboutme"><AboutMe /></section>
        <section id="stack"><Stack /></section>
        <section id="project"><Project /></section>
        <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
