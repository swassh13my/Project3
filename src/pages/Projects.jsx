import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "A smart review tool that evaluates resumes, highlights strengths, and suggests tailored improvements for specific roles.",
    githubLink: "https://github.com/swastik/ai-resume-analyzer"
  },
  {
    title: "Realtime Team Dashboard",
    description:
      "A full-stack productivity dashboard with live updates, data visualizations, and role-based collaboration features.",
    githubLink: "https://github.com/swastik/realtime-team-dashboard"
  },
  {
    title: "Portfolio CMS",
    description:
      "A lightweight content manager for updating projects, case studies, and links without touching presentation code.",
    githubLink: "https://github.com/swastik/portfolio-cms"
  },
  {
    title: "Prompt Workflow Studio",
    description:
      "An internal tool for organizing prompts, testing model outputs, and documenting repeatable AI workflows.",
    githubLink: "https://github.com/swastik/prompt-workflow-studio"
  }
];

function Projects() {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="section-kicker">Selected Work</span>
        <h1 className="section-title">Projects built around AI, product thinking, and polished UX</h1>
        <p className="section-text">
          A few recent builds that highlight the way I approach frontend
          systems, intelligent tooling, and real-world product execution.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
