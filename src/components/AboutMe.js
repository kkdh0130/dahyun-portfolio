import React from "react";

function AboutMe() {
  return (
    <div id="aboutme" className="container-fluid p-4 vh-90">
      <h2 className="text-center mt-4 mb-4">About Me</h2>
      <div className="d-flex flex-column align-items-center m-4 p-4">
        <img
          src={`${process.env.PUBLIC_URL}/images/dahyun_photo.png`}
          className="profile"
          alt="김다현 프로필"
        />
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
            <span className="highlight">REST API 기반의 데이터 연동 경험</span>
          </li>
          <li>
            <p>
              React와 <span className="highlight">Axios</span>를 활용하여 API 데이터를 요청하고,
              이를 기반으로 동적 웹 페이지를 구성하는 경험을 쌓았습니다.
            </p>
          </li>
          <li>
            <p>
              <span className="highlight">Node.js(Express.js)와의 통신</span>을 학습하며
              프론트엔드와 백엔드 간 데이터 흐름을 이해하려 노력하고 있습니다.
            </p>
          </li>
          <li>
            <span className="highlight">사용자 경험(UX) 최우선</span>
          </li>
          <li>
            <p>
              직관적이고 효율적인 UI를 만들기 위해{" "}
              <span className="highlight">사용자 중심 사고</span>로 접근합니다.
            </p>
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
