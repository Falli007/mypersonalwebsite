import { Link } from 'react-router-dom';
import SkillsMarquee from '../components/SkillsMarquee';
import ProjectCard from '../components/ProjectCard';
import { dashboards } from '../data/projects';

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <p className="hero-eyebrow">$ whoami</p>
          <img src="/images/Fredrick_Alli_photo.jpeg" alt="Fredrick Alli" className="profile-picture" />
          <h1>Hi, I'm Fredrick Alli</h1>
          <p>
            I'm a Data Consultant who turns complex datasets into clear, actionable insights.
            Specialising in Machine Learning, Data Engineering, Power BI, and DevOps, I build
            scalable, cloud-native solutions that drive real business impact.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              Explore My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      <SkillsMarquee />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Welcome to My Portfolio</h2>
            <p>
              As founder of FA Grace Consulting Ltd., I partner with organisations in finance,
              healthcare, smart-cities, and logistics to design, build, and deploy data platforms
              and predictive analytics.
            </p>
          </div>

          <div className="grid">
            {dashboards.map((dashboard) => (
              <ProjectCard
                key={dashboard.title}
                title={dashboard.title}
                summary={dashboard.summary}
                image={dashboard.image}
                githubUrl={dashboard.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>About Me</h2>
            <p>
              A dedicated data consultant with a strong background in Power BI, SQL, dbt, Azure,
              AWS, Snowflake, Python, and building ETL pipelines &mdash; helping organisations in
              fintech, construction, and private healthcare make data-driven decisions.
            </p>
          </div>
          <Link to="/about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
