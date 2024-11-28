// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import safiriPhoto from '../assets/img/safiri-home-page.png';
import simpleSocialMediaWebsitePhoto from '../assets/img/simple-interactive-social-media-website-home-page.png';
import medrinJobsPhoto from '../assets/img/medrin-jobs.png';
import financeManagerCLI from '../assets/img/finance-manager-cli.png';
import flatdangoMovieTheater from '../assets/img/flatdango-movie-theatre-home-page.png';

// import shoppingListWebsite from '../assets/img/shopping-list-home-page.png';
import mernApplicationWebsite from '../assets/img/mern-application.png';
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Safiri',
      description:
        'A travel app designed to help users explore various destinations, submit reviews, and view a slideshow of attractive travel locations',
      imgUrl: safiriPhoto,
      webUrl: 'https://safiri-phase-4-project.vercel.app/',
    },
    {
      title: 'Simple Interactive Social Media Website',
      description:
        'My beginner attempt at creating a website clone of most of the social media apps we use with limited data',
      imgUrl: simpleSocialMediaWebsitePhoto,
      webUrl: 'https://phase-1-project-rho.vercel.app/',
    },
    {
      title: 'Mern Application',
      description:
        'A MERN stack website which allows users to create, view, update and delete products',
      imgUrl: mernApplicationWebsite,
      webUrl: 'https://mern-application-crashcourse.onrender.com/',
    },

    {
      title: 'Finance Manager CLI',
      description:
        "A finance manager to help in keeping track of one's expenses, income and manipulate them appropriately",
      imgUrl: financeManagerCLI,
      webUrl: 'https://github.com/Markbkiunga/phase-3-project',
    },
    {
      title: 'Flatdango Movie Theater',
      description:
        'A simple mini web application that allows one to see a menu of movies, display its details and buy a ticket',
      imgUrl: flatdangoMovieTheater,
      webUrl: 'https://week-3-code-challenge-phi.vercel.app/',
    },
    {
      title: 'Medrin Jobs',
      description:
        'A full-stack web application which creates an accessible and secure online space that connects job seekers with employers efficiently.',
      imgUrl: medrinJobsPhoto,
      webUrl: 'https://medrin-jobs-frontend-beta.vercel.app/',
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
