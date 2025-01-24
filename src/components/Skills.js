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
import mongodbLogo from '../assets/img/mongodb.svg';
import mongooseLogo from '../assets/img/mongoose.svg';
import chakrauiLogo from '../assets/img/chakraui.svg';
import expressLogo from '../assets/img/express.svg';
import shadcnuiLogo from '../assets/img/shadcnui.svg';
import sassLogo from '../assets/img/sass.svg';
import nextjsLogo from '../assets/img/nextjs.svg';
import cssLogo from '../assets/img/css.svg';
import vercelLogo from '../assets/img/vercel.svg';
import convexLogo from '../assets/img/convex.svg';
import mySqlLogo from '../assets/img/mysql.svg';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
              <Tabs>
                {/* Tab List for Navigation */}
                <TabList>
                  <Tab>Frontend Technologies</Tab>
                  <Tab>Backend Technologies</Tab>
                  <Tab>Version Control & Deployment</Tab>
                  <Tab>Programming Languages</Tab>
                  <Tab>Additional Tools & Libraries</Tab>
                </TabList>

                {/* Frontend Technologies Carousel */}
                <TabPanel>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                  >
                    <div className="item">
                      <img src={htmlLogo} alt="HTML-logo" />
                      <h5>HTML</h5>
                    </div>
                    <div className="item">
                      <img src={cssLogo} alt="CSS-logo" />
                      <h5>CSS</h5>
                    </div>
                    <div className="item">
                      <img src={tailwindLogo} alt="Tailwind-css-logo" />
                      <h5>Tailwind CSS</h5>
                    </div>
                    <div className="item">
                      <img src={sassLogo} alt="Sass-logo" />
                      <h5>Sass</h5>
                    </div>
                    <div className="item">
                      <img src={reactLogo} alt="React-logo" />
                      <h5>React</h5>
                    </div>
                    <div className="item">
                      <img src={reactRouterLogo} alt="React-router-logo" />
                      <h5>React Router</h5>
                    </div>
                    <div className="item">
                      <img src={shadcnuiLogo} alt="Shadcnui-logo" />
                      <h5>Shadcn UI</h5>
                    </div>
                    <div className="item">
                      <img src={nextjsLogo} alt="Next.js-logo" />
                      <h5>Next.js</h5>
                    </div>
                    <div className="item">
                      <img src={chakrauiLogo} alt="ChakraUI-logo" />
                      <h5>Chakra UI</h5>
                    </div>
                    <div className="item">
                      <img src={figmaLogo} alt="Figma-logo" />
                      <h5>Figma</h5>
                    </div>
                  </Carousel>
                </TabPanel>

                {/* Backend Technologies Carousel */}
                <TabPanel>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={nodejsLogo} alt="Node.js-logo" />
                      <h5>Node.js</h5>
                    </div>
                    <div className="item">
                      <img src={expressLogo} alt="Express-logo" />
                      <h5>Express</h5>
                    </div>
                    <div className="item">
                      <img src={flaskLogo} alt="Flask-logo" />
                      <h5>Flask</h5>
                    </div>
                    <div className="item">
                      <img src={postgresLogo} alt="Postgres-logo" />
                      <h5>PostgreSQL</h5>
                    </div>
                    <div className="item">
                      <img src={mySqlLogo} alt="MySQL-logo" />
                      <h5>MySQL</h5>
                    </div>
                    <div className="item">
                      <img src={mongodbLogo} alt="MongoDB-logo" />
                      <h5>MongoDB</h5>
                    </div>
                    <div className="item">
                      <img src={mongooseLogo} alt="Mongoose-logo" />
                      <h5>Mongoose</h5>
                    </div>
                    <div className="item">
                      <img src={sqliteLogo} alt="SQLite-logo" />
                      <h5>SQLite</h5>
                    </div>
                    <div className="item">
                      <img src={convexLogo} alt="Convex-logo" />
                      <h5>Convex</h5>
                    </div>
                  </Carousel>
                </TabPanel>

                {/* Version Control & Deployment Carousel */}
                <TabPanel>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={gitLogo} alt="Git-logo" />
                      <h5>Git</h5>
                    </div>
                    <div className="item">
                      <img src={githubLogo} alt="Github-logo" />
                      <h5>Github</h5>
                    </div>
                    <div className="item">
                      <img src={dockerLogo} alt="Docker-logo" />
                      <h5>Docker</h5>
                    </div>
                    <div className="item">
                      <img src={renderLogo} alt="Render-logo" />
                      <h5>Render</h5>
                    </div>
                    <div className="item">
                      <img src={vercelLogo} alt="Vercel-logo" />
                      <h5>Vercel</h5>
                    </div>
                    <div className="item">
                      <img src={viteLogo} alt="Vite-logo" />
                      <h5>Vite</h5>
                    </div>
                  </Carousel>
                </TabPanel>

                {/* Programming Languages Carousel */}
                <TabPanel>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={javascriptLogo} alt="JavaScript-logo" />
                      <h5>JavaScript</h5>
                    </div>
                    <div className="item">
                      <img src={pythonLogo} alt="Python-logo" />
                      <h5>Python</h5>
                    </div>
                    <div className="item">
                      <img src={typescriptLogo} alt="Typescript-logo" />
                      <h5>TypeScript</h5>
                    </div>
                  </Carousel>
                </TabPanel>

                {/* Additional Tools & Libraries Carousel */}
                <TabPanel>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={markDownLogo} alt="Markdown-logo" />
                      <h5>Markdown</h5>
                    </div>
                    <div className="item">
                      <img src={reduxLogo} alt="Redux-logo" />
                      <h5>Redux</h5>
                    </div>
                  </Carousel>
                </TabPanel>
              </Tabs>
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
