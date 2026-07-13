import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <p className="hero-eyebrow">$ ls ./projects</p>
          <h1>My Projects</h1>
          <p>AI/GenAI, data science, and data engineering projects I've worked on.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {projects.map((project) => (
            <article className="project-detail" key={project.slug}>
              <span className="tag category-tag">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul>
                <li>
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </li>
                <li>
                  <strong>Focus:</strong> {project.focus}
                </li>
                <li>
                  <strong>Outcome:</strong> {project.outcome}
                </li>
              </ul>
              <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
