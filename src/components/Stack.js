import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import {
  SiMysql,
  SiFigma,
  SiJira,
  SiSlack,
  SiNotion,
  SiRedux,
  SiReactquery,
  SiPostman,
} from "react-icons/si";

function Stack() {
  return (
    <div className="stack-container p-4 vh-90">
      <h2 className="text-center mt-4 mb-4">Stack</h2>
      <div className="nes-container is-dark with-title mb-5">
        <p className="title">개발 스택</p>
        <div className="row justify-content-center text-center">
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <FaHtml5 size={50} color="#E34F26" />
            <p>HTML5</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <FaCss3Alt size={50} color="#1572B6" />
            <p>CSS3</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <FaJs size={50} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <FaReact size={50} color="#61DAFB" />
            <p>React</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiRedux size={50} color="#764ABC" />
            <p>Redux</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiReactquery size={50} color="#FF4154" />
            <p>React Query</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <FaBootstrap size={50} color="#7952B3" />
            <p>Bootstrap</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiMysql size={50} color="#4479A1" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <div className="nes-container is-dark with-title mt-4 mb-5">
        <p className="title">개발 도구</p>
        <div className="row justify-content-center text-center">
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiFigma size={50} color="#F24E1E" />
            <p>Figma</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <FaGitAlt size={50} color="#F05032" />
            <p>Git & GitHub</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiJira size={50} color="#0052CC" />
            <p>Jira</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiSlack size={50} color="#4A154B" />
            <p>Slack</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiNotion size={50} color="#000000" />
            <p>Notion</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 stack-item">
            <SiPostman size={50} color="#FF6C37" />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
