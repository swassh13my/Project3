import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="section-heading">
          <span className="section-kicker">What I Focus On</span>
          <h2 className="section-title">Building thoughtful products from idea to launch</h2>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <h3>Frontend Engineering</h3>
            <p>
              Responsive interfaces with strong visual hierarchy, scalable
              components, and smooth user journeys.
            </p>
          </article>

          <article className="info-card">
            <h3>AI Product Development</h3>
            <p>
              Practical integrations that turn models, prompts, and APIs into
              useful workflows for real users.
            </p>
          </article>

          <article className="info-card">
            <h3>Clean Collaboration</h3>
            <p>
              Clear structure, maintainable code, and dependable delivery that
              keeps projects easy to extend.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
