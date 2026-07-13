interface ProjectCardProps {
  title: string;
  summary: string;
  image: string;
  githubUrl: string;
  techStack?: string[];
}

export default function ProjectCard({ title, summary, image, githubUrl, techStack }: ProjectCardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} loading="lazy" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{summary}</p>
        {techStack && (
          <div className="tag-list">
            {techStack.slice(0, 4).map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        <a href={githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
