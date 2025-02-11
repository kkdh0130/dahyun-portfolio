import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "휴일도안심 (팀 프로젝트)",
      image: `${process.env.PUBLIC_URL}/images/pj_1.png`,
      description: "휴일에도 안심할 수 있도록 안전한 환경을 제공하는 웹 서비스",
      stack: "React, Firebase, Bootstrap",
      github: "#",
    },
    {
      title: "PokémonDex (개인 프로젝트)",
      image: `${process.env.PUBLIC_URL}/images/pj_2.png`,
      description: "포켓몬 정보 및 능력치를 검색할 수 있는 웹 서비스",
      stack: "React, PokeAPI, Bootstrap",
      github: "https://github.com/kkdh0130/my-pokemon",
    },
    {
      title: "김다현 포트폴리오",
      image: `${process.env.PUBLIC_URL}/images/pj_3.png`,
      description: "React & Bootstrap으로 제작한 개인 포트폴리오",
      stack: "React, Bootstrap, NES.css",
      github: "https://github.com/kkdh0130/dahyun-portfolio",
    },
    {
      title: "메인 기획 및 퍼블리싱",
      image: `${process.env.PUBLIC_URL}/images/pj_4.png`,
      description: "회사 공식 웹사이트 메인 페이지 기획 및 퍼블리싱 작업",
      stack: "HTML, CSS, JavaScript, Bootstrap",
      github: null,
    },
    {
      title: "xxx 페이지 퍼블리싱",
      image: `${process.env.PUBLIC_URL}/images/pj_5.png`,
      description: "xxx 파트너 프로그램 페이지 퍼블리싱 작업",
      stack: "HTML, CSS, JavaScript",
      github: null,
    },
    {
      title: "아트쿡 페이지 퍼블리싱",
      image: `${process.env.PUBLIC_URL}/images/pj_1.png`,
      description: "아트쿡 페이지 퍼블리싱 작업",
      stack: "HTML, CSS, JavaScript",
      github: "https://github.com/kkdh0130/ezen-art-cook",
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div id="project" className="container-fluid p-4 vh-90">
      <h2 className="text-center mt-4 mb-4">Project</h2>
      <div className="row justify-content-start mt-4 text-white p-4">
        {projects.map((project, index) => (
          <div className="col-md-4 col-sm-12 mb-4" key={index}>
            <div
              className="project-card"
              onClick={() => handleShow(project)}
              style={{ cursor: "pointer" }}
            >
              <p className="title">{project.title}</p>
              <img src={project.image} alt={project.title} className="project-img" />
              <p>{project.description}</p>
              <p>
                <strong>기술 스택:</strong> {project.stack}
              </p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedProject && (
            <>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="img-fluid mb-3"
              />
              <p className="text-dark">{selectedProject.description}</p>
              <p className="text-dark">
                <strong>기술 스택:</strong> {selectedProject.stack}
              </p>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  GitHub
                </a>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Project;
