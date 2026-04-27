function ProjectCard({ title, description, githubLink }) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <span className="project-card-label">Featured Build</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a
        className="project-link"
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
