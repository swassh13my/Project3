import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-eyebrow">Portfolio 2026</span>
        <h1 className="hero-title">
          Hi, I&apos;m Swastik — Building AI &amp; Web Apps
        </h1>
        <p className="hero-text">
          I design and develop thoughtful digital products with a focus on
          clean interfaces, fast performance, and practical AI experiences.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">
            View Projects
          </Link>
          <a className="button button-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-metric">
          <strong>Modern Stack</strong>
          <span>React, Vite, APIs, and polished UI systems.</span>
        </div>
        <div className="hero-metric">
          <strong>AI-Driven Builds</strong>
          <span>From assistants to workflow tools that solve real problems.</span>
        </div>
        <div className="hero-metric">
          <strong>User-Focused Delivery</strong>
          <span>Clear architecture, reusable components, and smooth UX.</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
