// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/ERP.png";
// import projImg2 from "../assets/img/pickpack.png";
// import projImg3 from "../assets/img/asset.png";
// import projImg4 from "../assets/img/fluxdb.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "ERP Website",
//       description: "Design by Figma & Development by WordPress",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Transport-chain Website",
//       description: "Design by Figma & Development by WordPress",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Asset Management Website",
//       description: "Design by Figma & Development by WordPress",
//       imgUrl: projImg3,
//     },
//     {
//       title: "FluxDB Dashboard",
//       description: "Design by Figma & Development by NextJS",
//       imgUrl: projImg4,
//     },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg2,
//     // },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg3,
//     // },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>  </p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">UX/UI Design</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Full stack</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Data Analyst</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p> </p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p> </p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }


import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ERP.png";
import projImg2 from "../assets/img/pickpack.png";
import projImg3 from "../assets/img/asset.png";
import projImg4 from "../assets/img/fluxdb.png";
import projImg5 from "../assets/img/code.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// 导入大图
import bigImg1 from "../assets/pdf/ERP.png";
import bigImg2 from "../assets/pdf/Dispatch.png";
import bigImg3 from "../assets/pdf/asset.png";
import bigImg4 from "../assets/pdf/influx.png";

export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ERP Website",
      description: "Design by Figma & Development by WordPress",
      additionalDescription: "Ebottli Internship - March 2024",
      imgUrl: projImg1,
      bigImgUrl: bigImg1,
    },
    {
      title: "Transport-chain Website",
      description: "Design by Figma & Development by WordPress",
      additionalDescription: "Ebottli Internship - April 2024",
      imgUrl: projImg2,
      bigImgUrl: bigImg2,
    },
    {
      title: "Asset Management Website",
      description: "Design by Figma & Development by WordPress",
      additionalDescription: "Ebottli Internship - May 2024",
      imgUrl: projImg3,
      bigImgUrl: bigImg3,
    },
    {
      title: "InfluxDB Dashboard",
      description: "Design by Figma & Development by NextJS",
      additionalDescription: "Uni Project - Aug 2024",
      imgUrl: projImg4,
      bigImgUrl: bigImg4,
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  const projects2 = [
    {
      title: "Code Forum",
      description: "Development by NextJs + React, Responsible for both frone-end and back-end",
      additionalDescription: "Uni Project - March 2024",
      imgUrl: projImg5,
      // bigImgUrl: bigImg1,
    },]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UX/UI Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Full stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data Analyst</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p> Click on each card to see the design prototypes. </p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                              />
                            )
                          })
                        }
                      </Row>
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> In progress </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.bigImgUrl} alt={selectedProject?.title} style={{width: '100%'}} />
        </Modal.Body>
      </Modal>
    </section>
  )
}