import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pythonLogo from '../assets/img/python.svg';
import reactLogo from '../assets/img/react.svg';
import sqliteLogo from '../assets/img/sqlite.svg';
import javascriptLogo from '../assets/img/javascript.svg';
import figmaLogo from '../assets/img/figma.svg';
import gitLogo from '../assets/img/git.svg';
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
                  <img
                    src={figmaLogo}
                    alt="Figma"
                  />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img
                    src={javascriptLogo}
                    alt="JavaScript"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src={gitLogo}
                    alt="Git"
                  />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sqliteLogo} alt="Sqlite" />
                  <h5>SQLite</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt={colorSharp} />
    </section>
  );
};
