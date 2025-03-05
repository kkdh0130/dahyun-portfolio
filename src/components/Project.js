import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "휴일도안심",
      memeber: "FE 2명(본인), BE 2명, RPA 1명",
      description: "공휴일이나 야간에도 신속하게 운영 중인 의료기관을 확인할 수 있는 웹 서비스",
      img: `${process.env.PUBLIC_URL}/images/pj_1.webp`,
      features: [
        "사용자의 현재 위치를 기반으로 운영 중인 의료기관을 실시간으로 검색할 수 있습니다.",
        "Kakao 지도 API를 활용하여 병원 위치를 지도에서 시각적으로 확인할 수 있습니다.",
        "REST API를 활용하여 최신 병원 운영 상태 및 정보를 실시간으로 반영합니다.",
        "RPA를 활용하여 Daum 리뷰 정보를 자동으로 수집하고 제공할 수 있습니다.",
        "사용자가 직접 병원 리뷰를 작성하고 공유할 수 있는 기능을 제공합니다.",
        "즐겨찾기 기능을 통해 자주 방문하는 의료기관을 저장하고 관리할 수 있습니다.",
      ],
      technologies: [
        "HTML, CSS, JavaScript, React",
        "REST API",
        "Figma (UI/UX 기획 & 디자인 설계)",
      ],
      contribution: [
        {
          title: "서비스 기획 & Figma를 활용한 UI/UX 설계",
          details: [
            "페이지 구조 및 화면 설계 기획",
            "Figma를 활용한 UI/UX 디자인 시안 제작",
            "직관적인 네비게이션 및 필터 기능 설계",
          ],
        },
        {
          title: "REST API 기반 데이터 연동 및 최적화",
          details: [
            "백엔드 제공 병원 운영 데이터 API 연동",
            "병원 정보(이름, 주소, 진료시간, 운영 상태) 데이터 처리",
            "fetch 및 Axios를 활용한 비동기 요청 및 오류 처리",
          ],
        },
        {
          title: "반응형 웹 UI 개발 및 스타일링",
          details: ["PC, 태블릿, 모바일 대응을 위한 반응형 UI 개발"],
        },
      ],
      canva:
        "https://www.canva.com/design/DAGcP1SqICA/TcVUoliEQJ1v-LrUJRDlkQ/view?utm_content=DAGcP1SqICA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he2ec48839a",
    },
    {
      id: 2,
      title: "PokémonDex - 포켓몬 도감 웹 서비스",
      memeber: "FE 1명",
      description: "포켓몬 API를 활용한 정보 조회 웹 서비스",
      link: "https://kkdh0130.github.io/my-pokemon/",
      github: "https://github.com/kkdh0130/my-pokemon",
      img: `${process.env.PUBLIC_URL}/images/pj_2.webp`,
      features: [
        "React와 Pokémon API를 활용하여 Pokémon 도감을 구현한 프로젝트입니다.",
        "포켓몬의 타입, 스킬, 속성 등의 정보를 상세하게 조회할 수 있습니다.",
        "Intersection Observer와 React Query를 활용해 무한 스크롤 기능을 구현하여, 사용자가 스크롤할 때 자동으로 더 많은 포켓몬 데이터를 불러올 수 있습니다.",
      ],
      technologies: ["React, JavaScript, Bootstrap", "Pokémon API", "REST API", "Redux Toolkit"],
      contribution: [
        "REST API 연동 및 데이터 가공 (Pokémon API 활용)",
        "무한 스크롤 - Intersection Observer & React Query 최적화",
        "검색 기능 - Pokémon 이름(한글) 필터링 적용",
        "포켓몬 상세 정보 - API 연동을 통한 추가 데이터 로딩 구현",
        "UI 디자인 및 컴포넌트 개발",
        "Redux Toolkit과 localStorage를 활용한 다크모드 및 사용자 설정 저장",
        "반응형 UI/UX 최적화 및 스타일링 개선",
      ],
    },
    {
      id: 3,
      title: "김다현 포트폴리오",
      description: "React & Bootstrap으로 제작한 개인 포트폴리오",
      link: " https://kkdh0130.github.io/dahyun-portfolio/",
      github: "https://github.com/kkdh0130/dahyun-portfolio",
      img: `${process.env.PUBLIC_URL}/images/pj_3.webp`,
      features: [
        "단순한 소개 페이지가 아니라, 내 개성을 담을 수 있는 포트폴리오를 만들고 싶었습니다.",
        "네온 스타일 UI를 활용해 나만의 분위기를 살리고, 타이핑 애니메이션을 추가해 동적인 느낌을 더했습니다.",
        "어떤 환경에서도 잘 보일 수 있도록 반응형 디자인을 적용해, 모바일과 데스크톱에서도 최적의 경험을 제공합니다.",
      ],
      technologies: ["React, Bootstrap, CSS"],
      contribution: [
        "포트폴리오 전체 설계 및 UI 구현",
        "애니메이션 효과 적용 (GSAP 활용)",
        "반응형 스타일링 및 UI 최적화",
      ],
    },
    {
      id: 4,
      title: "HRD 온라인 교육 플랫폼",
      description: "HRD 온라인 교육 플랫폼의 메인 페이지 기획 및 퍼블리싱",
      link: "https://hrdpuroom-index.vavv.net/",
      img: `${process.env.PUBLIC_URL}/images/pj_4.webp`,
      features: [
        "해당 기업의 정보를 효과적으로 전달할 수 있도록 홈페이지 메인 페이지를 기획했습니다.",
        "방문자가 필요한 정보를 쉽게 찾을 수 있도록 UI/UX를 개선하고 정보 구조를 최적화했습니다.",
        "반응형 웹을 적용해 PC와 모바일에서도 일관된 사용자 경험을 제공하도록 구현했습니다.",
      ],
      technologies: ["HTML, CSS, JavaScript, Bootstrap"],
      contribution: [
        "메인 페이지 기획 및 정보 구조 설계",
        "HTML, CSS, JavaScript를 활용한 퍼블리싱",
        "UX/UI 개선 및 웹 접근성 고려",
      ],
    },
    {
      id: 5,
      title: "Udacity 교육 파트너 페이지 퍼블리싱",
      description: "Udacity Why 페이지 UI 구현 및 반응형 디자인 적용",
      link: "https://udacitypartner.com/Why",
      img: `${process.env.PUBLIC_URL}/images/pj_5.webp`,
      features: [
        "Udacity의 파트너십을 소개하는 페이지를 보다 깔끔하고 직관적인 디자인으로 개선했습니다.",
        "모바일과 데스크톱에서 일관된 경험을 제공하기 위해 반응형 UI를 적용했습니다.",
      ],
      technologies: ["HTML, CSS, JavaScript"],
      contribution: [
        "HTML, CSS, JavaScript를 활용한 퍼블리싱",
        "반응형 스타일링 및 모바일 최적화",
        "GSAP을 활용한 애니메이션 적용",
      ],
    },
    {
      id: 6,
      title: "이젠 아트쿡 페이지 퍼블리싱",
      description: "HTML, CSS, Bootstrap 기반 아트쿡 웹페이지",
      link: "https://kkdh0130.github.io/ezen-art-cook/",
      github: "https://github.com/kkdh0130/ezen-art-cook",
      img: `${process.env.PUBLIC_URL}/images/pj_6.webp`,
      features: [
        "아트와 요리를 동시에 배울 수 있는 교육 플랫폼을 소개하는 페이지를 퍼블리싱했습니다.",
        "심플하면서도 직관적인 UI를 적용해, 방문자가 쉽게 정보를 탐색할 수 있도록 설계했습니다.",
        "반응형 디자인을 통해 다양한 기기에서도 최적의 레이아웃을 제공하도록 구현했습니다.",
      ],
      technologies: ["HTML, CSS, Bootstrap"],
      contribution: [
        "HTML, CSS, Bootstrap을 활용한 웹페이지 제작",
        "반응형 웹 적용 및 기본 UI 스타일링",
        "웹 표준 및 접근성을 고려한 퍼블리싱",
      ],
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="project-container text-center">
      <div className="project-sidebar mb-2">
        <h2 className="project-title">PROJECT TIMELINE</h2>
        {projects.map((project) => (
          <button
            key={project.id}
            className={`project-button ${activeProject === project.id ? "active" : ""}`}
            onClick={() => setActiveProject(project.id)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="project-content d-flex flex-column justify-content-center align-items-center text-center w-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map(
            (project) =>
              activeProject === project.id && (
                <div
                  key={project.id}
                  className="project-card d-flex flex-column align-items-center"
                >
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>
                  <div
                    className="web_preview_wrap d-flex flex-column justify-content-center align-items-center"
                    style={{ overflow: "hidden", width: "800px" }}
                  >
                    <div
                      className="site_img_wrap d-flex justify-content-center align-items-center overflow-hidden w-100"
                      style={{ borderRadius: "10px" }}
                    >
                      <img
                        className="site_img img-fluid mx-auto"
                        src={project.img}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                    <Button
                      variant="primary"
                      className="mt-4 pj-button"
                      onClick={() => handleShow(project)}
                    >
                      자세히 보기
                    </Button>
                  </div>
                  <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton className="modal-header">
                      <Modal.Title>{selectedProject?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-black p-4">
                      {selectedProject?.memeber && <p>참여 인원 : {selectedProject.memeber}</p>}
                      <p>{selectedProject?.description}</p>
                      <p className="mt-3">✔️ 주요 기능</p>
                      <ul className="project-modal-content">
                        {selectedProject?.features?.map((feature, index) => (
                          <p className="mb-1" key={index}>
                            {feature}
                          </p>
                        ))}
                      </ul>
                      <p className="mt-3">✔️ 사용 기술</p>
                      <ul className="project-modal-content">
                        {selectedProject?.technologies?.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                      <p className="mt-3">✔️ 작업 기여도</p>
                      <ul className="project-modal-content">
                        {Array.isArray(selectedProject?.contribution) &&
                          selectedProject.contribution.map((contribution, index) =>
                            typeof contribution === "string" ? (
                              <li key={index}>{contribution}</li>
                            ) : (
                              <li key={index}>
                                <strong>{contribution.title}</strong>
                                <ul>
                                  {contribution.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                  ))}
                                </ul>
                              </li>
                            ),
                          )}
                      </ul>

                      <div className="text-center">
                        <div className="d-flex justify-content-center gap-3 mt-4">
                          {selectedProject?.link && (
                            <a
                              href={selectedProject?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn project-link d-flex align-items-center gap-2"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="link"
                                className="svg-inline--fa fa-link fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="20"
                                height="20"
                              >
                                <path
                                  fill="currentColor"
                                  d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                                ></path>
                              </svg>
                              웹사이트 방문
                            </a>
                          )}
                          {selectedProject?.github && (
                            <a
                              href={selectedProject?.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn project-link d-flex align-items-center gap-2"
                            >
                              <img
                                src={`${process.env.PUBLIC_URL}/images/github-mark.svg`}
                                alt="GitHub"
                                className="github-icon"
                                width="20"
                                height="20"
                              />
                              GitHub 저장소
                            </a>
                          )}

                          {selectedProject?.canva && (
                            <a
                              href={selectedProject?.canva}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn project-link d-flex align-items-center gap-2"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="link"
                                className="svg-inline--fa fa-link fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="20"
                                height="20"
                              >
                                <path
                                  fill="currentColor"
                                  d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                                ></path>
                              </svg>
                              기획 및 설계
                            </a>
                          )}
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ),
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
