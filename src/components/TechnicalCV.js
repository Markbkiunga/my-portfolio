import React from 'react';
import '../App.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const TechnicalCV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Mark Brian Kiunga Kamau</h1>
        <p className="cv-title">Techie</p>
        <p className="cv-contact">
          <a
            href="https://www.linktr.ee/markbkiunga"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Linktree
          </a>
        </p>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        <p>
          Passionate Software Developer experienced in{' '}
          <strong>
            full-stack development, data visualization, and AI-powered
            applications
          </strong>
          . Skilled in{' '}
          <strong>
            React, Next.js, Node.js, Express, PostgreSQL, MongoDB, MySQL
          </strong>
          , and <strong>D3.js for data visualization</strong>. Proven ability to
          optimize website performance, implement SEO strategies, and enhance
          user engagement.
        </p>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend & UI/UX:</strong> React, Next.js, JavaScript,
            TypeScript, Vite, Sass, CSS, HTML, Figma
          </li>
          <li>
            <strong>Backend & Databases:</strong> Node.js, Express, Flask,
            PostgreSQL, MySQL, SQLite, MongoDB, Mongoose
          </li>
          <li>
            <strong>3D & Data Visualization:</strong> Three.js, D3.js, MS Excel
            (Pivot Tables, Data Cleaning)
          </li>
          <li>
            <strong>State Management & Tools:</strong> Redux, Zustand, Git,
            Docker, Vercel
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://mkavita.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mkavita
            </a>{' '}
            – Explore Mkavita’s journey as a musician, discover upcoming events,
            enjoy a curated discography, and get an exclusive glimpse behind the
            scenes.
          </li>
          <li>
            <a
              href="https://mbksolutions.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              MBK Solutions
            </a>{' '}
            – Providing affordable, high-quality services in both tech and
            music.
          </li>
          <li>
            <a
              href="https://moon-talent-factory-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moon Talent Factory
            </a>{' '}
            – Empowering young talents through music, arts, and mentorship. Join
            us in nurturing creativity and building confidence.
          </li>
          <li>
            <a
              href="https://create-your-valentine2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create Your Valentine 2
            </a>{' '}
            – Share your love with someone special today. Create multiple
            personalized pages, each password-protected and fully encrypted for
            complete privacy.
          </li>
          <li>
            <a
              href="https://whatsapp-clone-whatsweb.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsWeb
            </a>{' '}
            – My WhatsApp clone demonstrates the cutting-edge technologies I've
            mastered, enabling real-time messaging, group chats, and friend
            connections.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <p>
          <strong>Freelance Web Developer | Self-employed</strong> (June 2021 -
          Present)
        </p>
        <ul>
          <li>
            Developed <strong>responsive, optimized</strong> web applications
            using modern frameworks.
          </li>
          <li>
            Integrated <strong>AI-powered analytics</strong> and{' '}
            <strong>SEO strategies</strong> for businesses.
          </li>
          <li>
            Collaborated with clients to enhance{' '}
            <strong>UI/UX, database performance, and cloud deployments</strong>.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>BSc Data Science and Analytics</strong> – USIU-Africa (Jan
            2025 - Present)
          </li>
          <li>
            <strong>Software Engineering</strong> – Moringa School (Jun 2024 -
            Dec 2024)
          </li>
          <li>
            <strong>High School KCSE Certificate</strong> – Alliance High School
            (Jan 2020 - Dec 2023)
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Certifications</h2>
        <ul>
          <li>
            <a
              href="https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000D8f1z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineering – Moringa School
            </a>
          </li>
          <li>
            <a
              href="https://freecodecamp.org/certification/markbkiunga/data-visualization"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Visualization using D3.js – FreeCodeCamp
            </a>
          </li>
          <li>
            <a
              href="https://intranet.alxswe.com/certificates/XpNs5G2xJS"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Career Essentials – ALX Africa
            </a>
          </li>
          <li>
            <a
              href="https://freecodecamp.org/certification/markbkiunga/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Responsive Web Design – FreeCodeCamp
            </a>
          </li>
        </ul>
      </section>
      <div className="cv-footer">
        <a
          href="https://drive.google.com/file/d/1qPHI8AOCHsehEg40N9-x_5mBXhZHDvyp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          📄 View Full CV Document
        </a>
        <a
          href="https://drive.google.com/u/0/uc?id=1qPHI8AOCHsehEg40N9-x_5mBXhZHDvyp&export=download"
          className="cta-button"
          download
        >
          ⬇️ Download CV
        </a>
      </div>
      <div className="cv-footer">
        <Link to="/" className="cta-button">
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default TechnicalCV;
