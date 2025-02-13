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
      <h3 className="text-center mt-5 mb-4">Career</h3>
      <div className="d-flex justify-content-center">
        <div className="career-container pt-4" style={{ maxWidth: "664px", textAlign: "left" }}>
          <ul className="nes-list is-circle text-white w-100">
            <li>
              <p>
                <span className="highlight">[푸름인재개발원]</span> 2020.10.19 ~ 2024.04.20
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">[기획팀 → 개발팀]</span>
                처음에는 <span className="highlight">기획팀</span>에서 LMS 시스템 관리와 UX 개선
                업무를 담당했습니다.
              </p>
            </li>
            <li>
              사용자 피드백을 분석하고 개선안을 제안하면서, 개발 역량의 필요성을 절감했습니다.
            </li>
            <li>
              <p>
                웹 개발에 대한 관심이 커져 직접 공부를 시작했고,
                <span className="highlight">프론트엔드 개발자로 전환</span>하여 프로젝트에 참여하게
                되었습니다.
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">사용자 경험(UX) 최우선</span>
                LMS의 UI/UX를 개선하는 프로젝트를 진행하며, 직관적이고 효율적인 UI 설계를 위해{" "}
                <span className="highlight">사용자 중심 사고</span>로 접근했습니다.
              </p>
            </li>
            <li>
              <span className="highlight">웹 접근성 & 반응형 UI 개선</span>
            </li>
            <li>- 기존 LMS의 웹 접근성을 강화하고, 모바일에서도 최적화된 UI를 구현했습니다.</li>
            <li>
              - HTML, CSS, JavaScript를 활용하여 UX/UI를 개선하고, 실제 사용자 반응을 분석했습니다.
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
    </div>
  );
}

export default AboutMe;
