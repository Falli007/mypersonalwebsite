import { Link } from 'react-router-dom';
import { coreServices, clients, hobbies } from '../data/profile';

export default function About() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <img src="/images/Fredrick_Alli_photo.jpeg" alt="Fredrick Alli" className="profile-picture" />
          <h1>Hi, I'm Fredrick Alli</h1>
          <p>
            A results-driven Data Consultant specialising in Machine Learning, Data Engineering,
            Power BI and DevOps. I help organisations turn raw data into actionable insights and
            scalable, cloud-native solutions.
          </p>
          <Link to="/projects" className="btn btn-primary">
            View Some of My Work
          </Link>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Professional Summary</h2>
            <p>
              I lead FA Grace Consulting Ltd., a London-based technology consultancy specialising
              in Machine Learning, Data Engineering, Business Intelligence, and DevOps. Over the
              past 5+ years, I've designed &amp; deployed high-performance data platforms, built
              predictive analytics solutions, and automated CI/CD pipelines for clients in
              finance, healthcare, smart-city, and construction logistics sectors.
            </p>
          </div>

          <div className="section-heading">
            <h2>My Story</h2>
            <p>
              Early on I discovered that data isn't just numbers &mdash; it's the heartbeat of
              modern business. I dove deep into ETL pipelines and real-time analytics, then
              expanded into cloud architectures and CI/CD practices to deliver end-to-end
              solutions. Today, I love architecting systems that run reliably at scale and
              uncovering insights that drive real impact.
            </p>
          </div>

          <div className="section-heading">
            <h2>Core Services</h2>
            <ul className="services-list">
              {coreServices.map((service) => (
                <li key={service.label}>
                  <strong>{service.label}:</strong> {service.detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="section-heading">
            <h2>Clients &amp; Partners</h2>
            <div className="client-grid">
              {clients.map((client) => (
                <div className="client-card" key={client.name}>
                  <h3>{client.name}</h3>
                  <p>{client.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-heading">
            <h2>Outside of Work</h2>
            <ul className="hobbies-list">
              {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={{ marginBottom: '1rem' }}>Let's Talk!</h2>
            <p style={{ marginBottom: '1rem' }}>Interested in a data-driven transformation?</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
