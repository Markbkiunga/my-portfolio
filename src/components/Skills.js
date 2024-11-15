import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pythonLogo from '../assets/img/python.svg';
import reactLogo from '../assets/img/react.svg';
import sqliteLogo from '../assets/img/sqlite.svg';
import javascriptLogo from '../assets/img/javascript.svg';
import figmaLogo from '../assets/img/figma.svg';
import gitLogo from '../assets/img/git.svg';
import markDownLogo from '../assets/img/markdown.svg';
import htmlLogo from '../assets/img/html.svg';
import githubLogo from '../assets/img/github.svg';
import nodejsLogo from '../assets/img/nodejs.svg';
import reactRouterLogo from '../assets/img/react-router.svg';
import tailwindLogo from '../assets/img/tailwind-css.svg';
import flaskLogo from '../assets/img/flask.svg';
import viteLogo from '../assets/img/vite.svg';
import renderLogo from '../assets/img/render.svg';
import postgresLogo from '../assets/img/postgresql.svg';
import dockerLogo from '../assets/img/docker.svg';
import typescriptLogo from '../assets/img/typescript.svg';
import reduxLogo from '../assets/img/redux.svg';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <p>
                Turning ambitious visions into seamless, high-performing
                solutions—my tech stack is the toolkit that transforms
                inspiration into interactive, engaging realities.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={figmaLogo} alt="Figma-logo" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={javascriptLogo} alt="JavaScript-logo" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={gitLogo} alt="Git-logo" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Python-logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="React-logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sqliteLogo} alt="Sqlite-logo" />
                  <h5>SQLite</h5>
                </div>
                <div className="item">
                  <img src={markDownLogo} alt="Markdown-logo" />
                  <h5>Markdown</h5>
                </div>
                <div className="item">
                  <img src={htmlLogo} alt="HTML-logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={githubLogo} alt="Github-logo" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={nodejsLogo} alt="Node.js-logo" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={reactRouterLogo} alt="React-router-logo" />
                  <h5>React Router</h5>
                </div>
                <div className="item">
                  <img src={tailwindLogo} alt="Tailwind-css-logo" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={flaskLogo} alt="Flask-logo" />
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <img src={viteLogo} alt="Vite-logo" />
                  <h5>Vite</h5>
                </div>
                <div className="item">
                  <img src={renderLogo} alt="Render-logo" />
                  <h5>Render</h5>
                </div>
                <div className="item">
                  <img src={postgresLogo} alt="Postgres-logo" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={dockerLogo} alt="Docker-logo" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={typescriptLogo} alt="Typescript-logo" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={reduxLogo} alt="Redux-logo" />
                  <h5>Redux</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt={colorSharp}
      />
    </section>
  );
};
