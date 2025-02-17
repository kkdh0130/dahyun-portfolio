import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/common.css";

function Home() {
  const [showFinalText, setShowFinalText] = useState(false);
  const [showScrollText, setShowScrollText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFinalText(true);
    }, 2000);

    setTimeout(() => {
      setShowScrollText(true);
    }, 3500);
  }, []);

  return (
    <div
      id="home"
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <h1 className="text-center typing-text">
        {!showFinalText ? (
          <Typewriter
            words={["INSERT COIN..."]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={30}
            delaySpeed={4000}
          />
        ) : (
          <span className="final-text"> > WELCOME KIM DAHYUN PORTFOLIO! </span>
        )}
      </h1>
      {showScrollText && <p className="scroll-text">SCROLL DOWN TO START</p>}
    </div>
  );
}

export default Home;
