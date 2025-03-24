import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import colorSharp from '../assets/img/color-sharp.png';

const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'HTML', src: 'html.svg' },
      { name: 'CSS', src: 'css.svg' },
      { name: 'Tailwind CSS', src: 'tailwind-css.svg' },
      { name: 'Sass', src: 'sass.svg' },
      { name: 'React', src: 'react.svg' },
      { name: 'React Router', src: 'react-router.svg' },
      { name: 'Shadcn UI', src: 'shadcnui.svg' },
      { name: 'Next.js', src: 'nextjs.svg' },
      { name: 'Chakra UI', src: 'chakraui.svg' },
      { name: 'Figma', src: 'figma.svg' },
    ],
  },
  {
    title: 'Backend Technologies',
    skills: [
      { name: 'Node.js', src: 'nodejs.svg' },
      { name: 'Express', src: 'express.svg' },
      { name: 'Flask', src: 'flask.svg' },
      { name: 'PostgreSQL', src: 'postgresql.svg' },
      { name: 'MySQL', src: 'mysql.svg' },
      { name: 'MongoDB', src: 'mongodb.svg' },
      { name: 'Mongoose', src: 'mongoose.svg' },
      { name: 'SQLite', src: 'sqlite.svg' },
      { name: 'Convex', src: 'convex.svg' },
    ],
  },
  {
    title: 'Version Control & Deployment',
    skills: [
      { name: 'Git', src: 'git.svg' },
      { name: 'Github', src: 'github.svg' },
      { name: 'Docker', src: 'docker.svg' },
      { name: 'Render', src: 'render.svg' },
      { name: 'Vercel', src: 'vercel.svg' },
      { name: 'Vite', src: 'vite.svg' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', src: 'javascript.svg' },
      { name: 'Python', src: 'python.svg' },
      { name: 'TypeScript', src: 'typescript.svg' },
    ],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      { name: 'Pandas', src: 'pandas.svg' },
      { name: 'NumPy', src: 'numpy.svg' },
      { name: 'Matplotlib', src: 'matplotlib.svg' },
      { name: 'Scikit-Learn', src: 'scikit-learn.svg' },
      { name: 'R', src: 'r.svg' },
      { name: 'Jupyter Notebook', src: 'jupyter.svg' },
      { name: 'RStudio', src: 'r-studio.svg' },
      { name: 'PyCharm', src: 'pycharm.svg' },
      { name: 'SQL', src: 'mysql.svg' },
    ],
  },
  {
    title: 'Additional Tools & Libraries',
    skills: [
      { name: 'Markdown', src: 'markdown.svg' },
      { name: 'Redux', src: 'redux.svg' },
    ],
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const Skills = () => {
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
                <TabList>
                  {skillCategories.map((category) => (
                    <Tab key={category.title}>{category.title}</Tab>
                  ))}
                </TabList>
                {skillCategories.map((category) => (
                  <TabPanel key={category.title}>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={3000}
                      transitionDuration={500}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="item">
                          <img
                            src={require(`../assets/img/${skill.src}`)}
                            alt={`${skill.name}-logo`}
                          />
                          <h5>{skill.name}</h5>
                        </div>
                      ))}
                    </Carousel>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
