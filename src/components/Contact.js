import React, { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "kkdh0130@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <div
      id="contact"
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
    >
      {!showContact && (
        <>
          <h2 className="game-over-text text-center">GAME OVER</h2>

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
          <div className="text-center mt-4 d-flex flex-column align-items-center">
            <div className="mb-4">
              <h3 className="text-white text-center">
                THANK YOU FOR VISITING! <br />
                LET'S CONNECT!
              </h3>
            </div>
            <div className="icon-list d-flex flex-row justify-content-center gap-4">
              <a href="https://github.com/kkdh0130" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon github is-large"></i>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard();
                }}
              >
                <i className="nes-icon gmail is-large"></i>
              </a>
            </div>
          </div>
        </>
      )}
      {copied && <div className="email-toast">📧 이메일 주소가 복사되었습니다!</div>}
    </div>
  );
}

export default Contact;
