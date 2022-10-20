import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/notes.png";
import projImg2 from "../assets/img/qrcode.png";
import projImg3 from "../assets/img/drawing.png";
import projImg4 from "../assets/img/play.png";
import projImg5 from "../assets/img/qrscanner.png";
import projImg6 from "../assets/img/todo.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export default function Projects() {

  const projects = [
    {
      title: "Notes App",
      description: "Notes Web App",
      imgUrl: projImg1,
      links: "https://drinenoteapp.netlify.app/",
    },
    {
      title: "QR Code Generator",
      description: "Create your own Qr Code",
      imgUrl: projImg2,
      links: "https://qrcodedrine.netlify.app/",
    },
    {
      title: "Drawing App",
      description: "Drawing Web App",
      imgUrl: projImg3,
      links: "https://drinedrawing.netlify.app/",
    },
    {
      title: "Play Valo",
      description: "Invite your friends with style",
      imgUrl: projImg4,
      links: "https://drine.netlify.app/",
    },
    {
      title: "QR Scanner",
      description: "Scans QR Codes",
      imgUrl: projImg5,
      links: "https://qrcodedrine.netlify.app/qrscanner",
    },
    {
      title: "ToDo App",
      description: "Manage your task easily",
      imgUrl: projImg6,
      links: "https://drine-todoapp.netlify.app/",
    }
  ];

  return (
    <section className="project" id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p>These are some of my projects that I code using HTML, CSS and Javascript</p> */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" defaultActiveKey="/home" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content className='projectko'>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return(
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">PWET SI</Tab.Pane>
                <Tab.Pane eventKey="third">JAM!!!</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={ colorSharp2 } className="background-image-right" />
    </section>
  )
}

