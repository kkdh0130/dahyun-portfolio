import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/common.css";

function Home() {
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFinalText(true);
    }, 2000);
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
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={3000}
          />
        ) : (
          <span className="final-text"> > WELCOM KIM DAHYUN PORTFOLIO! </span>
        )}
      </h1>
    </div>
  );
}

export default Home;
