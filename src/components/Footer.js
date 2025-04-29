import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/mark-logo.avif';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-black text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" className="logo mb-3" />
          </Col>

          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-3">
              <a
                href="https://www.linkedin.com/in/markbriankiungakamau"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.github.com/Markbkiunga"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/heismarkbkiunga"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>
              <a
                href="mailto:markbriankiunga@gmail.com"
                className="footer-link"
              >
                markbriankiunga@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+254732781233" className="footer-link">
                0732 781 233
              </a>
            </p>
            <p>
              Adapted by
              <a
                href="https://www.mbksolutions.co.ke"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                {' '}
                MBK Solutions
              </a>
              <br />
              &copy; {currentYear}. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
