/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/my-cropped-full-image.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    'Software Engineer',
    'Aspiring Data Scientist',
    'Web Developer',
    'Full Stack Software Developer',
    'Aspiring Data Analyst',
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Mark Brian`} <br />{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate="['Software Engineer', 'Aspiring Data Scientist', Web Developer, 'Full Stack Web Developer', 'Aspiring Data Analyst']"
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am proficient at software development, and have a strong
                    interest in artificial intelligence. I am eager to
                    contribute to projects that use technology to solve
                    real-world problems. I am excited to pursue opportunities in
                    software development, AI, and tech innovation where I can
                    continue to grow and make a meaningful impact.
                  </p>
                  <button
                    onClick={() => {
                      // const connectSection = document.getElementById('connect');
                      // if (connectSection) {
                      //   connectSection.scrollIntoView();
                      // }
                      window.open(
                        'https://drive.google.com/file/d/1z905ZAKZ39yNpjagw03SNp3PZ60CW5MT/view?usp=sharing',
                        '_blank'
                      );
                    }}
                  >
                    View CV
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                // Visibility to persist
                <div
                  className={
                    isVisible ? 'header-img-container' : 'header-img-container'
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
