import React from "react";

function Project() {
  return (
    <div id="project" className="container-fluid p-4 vh-100">
      <h2 className="text-center mt-4 mb-4">Project</h2>
      <div className="row justify-content-start mt-4 text-white p-4">
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="project-card">
            <p className="title">휴일도안심 (팀 프로젝트)</p>
            <img src={`${process.env.PUBLIC_URL}/images/pj_1.png`} alt="휴일도안심" className="project-img" />
            <p>휴일에도 안심할 수 있도록 안전한 환경을 제공하는 웹 서비스</p>
            <p>
              <strong>기술 스택:</strong> React, Firebase, Bootstrap
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="nes-btn is-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="project-card">
            <p className="title">PokémonDex (개인 프로젝트)</p>
            <img src={`${process.env.PUBLIC_URL}/images/pj_2.png`} alt="포켓몬덱스" className="project-img" />
            <p>포켓몬 정보 및 능력치를 검색할 수 있는 웹 서비스</p>
            <p>
              <strong>기술 스택:</strong> React, PokeAPI, Bootstrap
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="nes-btn is-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="project-card">
            <p className="title">김다현 포트폴리오</p>
            <img src={`${process.env.PUBLIC_URL}/images/pj_3.png`} alt="Portfolio" className="project-img" />
            <p>React & Bootstrap으로 제작한 개인 포트폴리오</p>
            <p>
              <strong>기술 스택:</strong> React, Bootstrap, NES.css
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="nes-btn is-primary">
              GitHub
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="project-card">
            <p className="title">메인 기획 및 퍼블리싱</p>
            <img src={`${process.env.PUBLIC_URL}/images/pj_4.png`} alt="메인 기획" className="project-img" />
            <p>회사 공식 웹사이트 메인 페이지 기획 및 퍼블리싱 작업</p>
            <p>
              <strong>기술 스택:</strong> HTML, CSS, JavaScript, Bootstrap
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="project-card">
            <p className="title">xxx 페이지 퍼블리싱</p>
            <img src={`${process.env.PUBLIC_URL}/images/pj_5.png`} alt="xxx 페이지" className="project-img" />
            <p>xxx 파트너 프로그램 페이지 퍼블리싱 작업</p>
            <p>
              <strong>기술 스택:</strong> HTML, CSS, JavaScript
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="project-card">
            <p className="title">아트쿡 페이지 퍼블리싱</p>
            <img src={`${process.env.PUBLIC_URL}/images/pj_1.png`} alt="아트쿡" className="project-img" />
            <p>아트쿡 페이지 퍼블리싱 작업</p>
            <p>
              <strong>기술 스택:</strong> HTML, CSS, JavaScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
