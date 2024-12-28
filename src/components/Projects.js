// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import safiriPhoto from '../assets/img/safiri-home-page.png';
// import simpleSocialMediaWebsitePhoto from '../assets/img/simple-interactive-social-media-website-home-page.png';
import medrinJobsPhoto from '../assets/img/medrin-jobs.png';
import financeManagerCLI from '../assets/img/finance-manager-cli.png';
// import flatdangoMovieTheater from '../assets/img/flatdango-movie-theatre-home-page.png';
import mkavitaWebsite from '../assets/img/mkavita-website.png';
import whatsappClone from '../assets/img/whatsapp-clone.png';
// import shoppingListWebsite from '../assets/img/shopping-list-home-page.png';
import mernApplicationWebsite from '../assets/img/mern-application.png';
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Medrin Jobs',
      description:
        'A full-stack web application which creates an accessible and secure online space that connects job seekers with employers efficiently.',
      imgUrl: medrinJobsPhoto,
      webUrl: 'https://medrin-jobs-frontend-beta.vercel.app/',
    },

    {
      title: 'Mkavita',
      description:
        'Explore Mkavita’s journey as a musician, discover upcoming events, enjoy a curated discography, and get an exclusive glimpse behind the scenes.',
      imgUrl: mkavitaWebsite,
      webUrl: 'https://mkavita-website.vercel.app/',
    },
    {
      title: 'WhatsWeb',
      description:
        "My WhatsApp clone demonstrates the cutting-edge technologies I've mastered—enabling real-time messaging, group chats, and friend connections.",
      imgUrl: whatsappClone,
      webUrl: 'https://whatsapp-clone-demo-zeta.vercel.app/',
    },
    {
      title: 'MERN Stack Products Application',
      description:
        'A MERN stack website which allows users to create, view, update and delete products',
      imgUrl: mernApplicationWebsite,
      webUrl: 'https://mern-application-crashcourse.onrender.com/',
    },
    {
      title: 'Safiri',
      description:
        'A travel app designed to help users explore various destinations, submit reviews, and view a slideshow of attractive travel locations',
      imgUrl: safiriPhoto,
      webUrl: 'https://safiri-phase-4-project.vercel.app/',
    },
    {
      title: 'Finance Manager CLI',
      description:
        "A finance manager to help in keeping track of one's expenses, income and manipulate them appropriately",
      imgUrl: financeManagerCLI,
      webUrl: 'https://github.com/Markbkiunga/phase-3-project',
    },
  ];

  return (
    <section className="project" id="projects">
      {/* <Container>
        <Row>
          <Col size={12}> */}
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <h2>Projects</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
            {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row> */}
            <div id="project-tiles">
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </div>
            {/* </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
          </div>
        )}
      </TrackVisibility>
      {/* </Col>
        </Row>
      </Container> */}
      {/* <img className="background-image-right" src={colorSharp2} alt=""></img> */}
    </section>
  );
};
