import React from "react";

function AboutMe() {
  return (
    <div id="aboutme" className="container-fluid p-4 mt-4 vh-100">
      <h2 className="text-center mt-5 mb-4">About Me</h2>
      <div className="d-flex flex-column align-items-center m-4 p-4">
        <img src="/images/dahyun_photo.png" className="profile" alt="Kim Dahyun" />
        <div className="badge-container">
          <span className="neon-badge">#즉시실행</span>
          <span className="neon-badge">#적응력_강한</span>
          <span className="neon-badge">#끈기있는</span>
        </div>
      </div>
      <h3 className="text-center mb-4">김다현</h3>
      <h3 className="text-center"> | 즉시 실행하는 프론트엔드 개발자 </h3>
      <div className="lists pt-4 d-flex justify-content-center">
        <ul className="nes-list is-circle text-white">
          <li>
            <span className="highlight">생각보다 행동이 먼저!</span>
          </li>
          <li>
            <p>
              목표가 생기면 망설임 없이 실행하는{" "}
              <span className="highlight">추진력이 강한 개발자</span>입니다.
            </p>
          </li>
          <li>
            <span className="highlight">비전공자로 시작 → 프론트엔드 전향</span>
          </li>
          <li>
            <p>
              유다시티 강의를 계기로 웹 개발을 접했고,{" "}
              <span className="highlight">실무 프로젝트를 통해 성장</span>해왔습니다.
            </p>
          </li>
          <li>
            <span className="highlight">사용자 경험(UX) 최우선</span>
          </li>
          <li>
            직관적이고 효율적인 UI를 만들기 위해{" "}
            <span className="highlight">사용자 중심 사고</span>로 접근합니다.
          </li>
          <li>
            <p>
              최신 기술을 학습하고 <span className="highlight">더 나은 서비스를 개발</span>하는
              것이 목표입니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
