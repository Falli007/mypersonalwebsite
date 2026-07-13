import { Link } from 'react-router-dom';
import SkillsMarquee from '../components/SkillsMarquee';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <p className="hero-eyebrow">$ whoami</p>
          <img src="/images/Fredrick_Alli_photo.jpeg" alt="Fredrick Alli" className="profile-picture" />
          <h1>Hi, I'm Fredrick Alli</h1>
          <p>
            I'm an AI Engineer, Data Scientist &amp; Data Engineer who turns complex data and LLMs
            into real, production-ready systems. Specialising in GenAI/RAG, machine learning,
            and cloud-native data engineering, I build agents, models, and pipelines that drive
            real business impact.
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
            <h2>Featured Projects</h2>
            <p>
              A cross-section of recent work spanning AI agents, retrieval-augmented generation,
              and production data engineering pipelines.
            </p>
          </div>

          <div className="grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                summary={project.summary}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
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
              An AI Engineer, Data Scientist &amp; Data Engineer with a strong background in
              GenAI/RAG systems, LLM agents, machine learning, and cloud data platforms (Azure,
              AWS, Snowflake, Databricks, Microsoft Fabric) &mdash; helping organisations in
              finance, healthcare, and logistics turn data into decisions.
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
