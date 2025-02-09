import React, { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div
      id="contact"
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <h2 className="game-over-text text-center">GAME OVER</h2>
      {!showContact && (
        <>
          <p className="continue">CONTINUE?</p>
          <div className="continue-options">
            <div className="yes-option" onClick={() => setShowContact(true)}>
              ▶ YES
            </div>
            <div className="no-option" onClick={() => setShowContact(true)}>
              NO
            </div>
          </div>
        </>
      )}
      {showContact && (
        <>
          <h3 className="nes-text is-primary text-center">
            THANK YOU FOR VISITING! <br />
            LET'S CONNECT!
          </h3>
          <div className="text-center mt-4">
            <section className="icon-list">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon github is-large"></i>
              </a>
              <a href="#">
                <i className="nes-icon gmail is-large"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon google is-large"></i>
              </a>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
