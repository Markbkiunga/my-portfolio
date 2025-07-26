import { ProjectCard } from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const projectData = [
  {
    title: 'Moon Talent Factory',
    description:
      'Empowering young talents through music, arts, and mentorship. Join us in nurturing creativity and building confidence.',
    imgUrl: 'moon-talent-factory-website.avif',
    webUrl: 'https://moon-talent-factory-website.vercel.app/',
  },
  {
    title: 'Mkavita',
    description:
      'Explore Mkavita’s journey as a musician, discover upcoming events, enjoy a curated discography, and get an exclusive glimpse behind the scenes.',
    imgUrl: 'mkavita-website.avif',
    webUrl: 'https://mkavita-website.vercel.app/',
  },
  {
    title: 'MBK Solutions',
    description:
      'Providing affordable, high-quality services in both tech and music.',
    imgUrl: 'mbksolutions-website.avif',
    webUrl: 'https://mbksolutions.vercel.app/',
  },
  {
    title: 'WhatsWeb',
    description:
      "My WhatsApp clone demonstrates the cutting-edge technologies I've mastered—enabling real-time messaging, group chats, and friend connections.",
    imgUrl: 'whatsweb.avif',
    webUrl: 'https://whatsapp-clone-whatsweb.vercel.app/',
  },
  {
    title: 'Mzikimart',
    description: 'Connecting music sellers and buyers like never before!',
    imgUrl: 'mzikimart.avif',
    webUrl: 'https://mzikimart.vercel.app/',
  },

  {
    title: 'Create Your Valentine',
    description:
      "Craft a personalized Valentine's message with photos, music, and beautiful animations. Share your love with someone special today.",
    imgUrl: 'create-your-valentine1.avif',
    webUrl: 'https://create-your-valentine.vercel.app/',
  },
  {
    title: 'Create Your Valentine 2',
    description:
      'Now more automated than ever! Create multiple personalized pages, each password-protected and fully encrypted for complete privacy.',
    imgUrl: 'create-your-valentine2.avif',
    webUrl: 'https://create-your-valentine2.vercel.app/',
  },
  {
    title: 'Medrin Jobs',
    description:
      'A full-stack web application which creates an accessible and secure online space that connects job seekers with employers efficiently.',
    imgUrl: 'medrin-jobs.avif',
    webUrl: 'https://medrin-jobs.vercel.app/',
  },
  {
    title: 'Finance Manager CLI',
    description:
      "A finance manager to help in keeping track of one's expenses, income and manipulate them appropriately",
    imgUrl: 'finance-manager-cli.avif',
    webUrl: 'https://github.com/Markbkiunga/phase-3-project',
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <h2>Projects</h2>
            <div id="project-tiles">
              {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};
