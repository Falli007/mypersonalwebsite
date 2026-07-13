import { useEffect, useState } from 'react';
import ResumeLogin from './ResumeLogin';

interface Job {
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
}

interface SkillGroup {
  category: string;
  items: string;
}

interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  company: { name: string; address: string; summary: string };
  skills: SkillGroup[];
  experience: Job[];
  education: string[];
  certifications: string[];
  achievements: string[];
}

type LoadState = 'checking' | 'unauthorized' | 'loading' | 'ready' | 'error';

export default function Resume() {
  const [loadState, setLoadState] = useState<LoadState>('checking');
  const [resume, setResume] = useState<ResumeData | null>(null);

  async function loadResume() {
    setLoadState('loading');
    try {
      const response = await fetch('/api/resume', { credentials: 'include' });
      if (!response.ok) {
        setLoadState('unauthorized');
        return;
      }
      const data: ResumeData = await response.json();
      setResume(data);
      setLoadState('ready');
    } catch {
      setLoadState('error');
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/resume/status', { credentials: 'include' });
        const data = await response.json();
        if (data.authorized) {
          await loadResume();
        } else {
          setLoadState('unauthorized');
        }
      } catch {
        setLoadState('error');
      }
    })();
  }, []);

  if (loadState === 'checking' || loadState === 'loading') {
    return (
      <section className="section">
        <div className="container">
          <p>Loading…</p>
        </div>
      </section>
    );
  }

  if (loadState === 'unauthorized') {
    return <ResumeLogin onAuthorized={loadResume} />;
  }

  if (loadState === 'error' || !resume) {
    return (
      <section className="section">
        <div className="container">
          <p className="form-status error">Couldn't load the resume right now. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <header className="hero">
        <div className="container">
          <img src="/images/Fredrick_Alli_photo.jpeg" alt={resume.name} className="profile-picture" />
          <h1>{resume.name}</h1>
          <p>{resume.title}</p>
          <p>
            {resume.location} &nbsp;|&nbsp; <a href={`mailto:${resume.email}`}>{resume.email}</a>
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="resume-header">
            <h2>{resume.company.name}</h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Registered Address:</strong>
              <br />
              {resume.company.address}
            </p>
            <h3 style={{ marginBottom: '0.5rem' }}>Professional Summary</h3>
            <p>{resume.company.summary}</p>
          </div>

          <div className="section-heading">
            <h2>Key Skills</h2>
            <ul className="services-list">
              {resume.skills.map((skill) => (
                <li key={skill.category}>
                  <strong>{skill.category}:</strong> {skill.items}
                </li>
              ))}
            </ul>
          </div>

          <div className="section-heading">
            <h2>Work Experience</h2>
            {resume.experience.map((job) => (
              <div className="job-block" key={`${job.company}-${job.dateRange}`}>
                <h3>
                  {job.company} &ndash; {job.location} <span className="date">{job.dateRange}</span>
                </h3>
                <ul>
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-heading">
            <h2>Education</h2>
            <ul>
              {resume.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-heading">
            <h2>Certifications</h2>
            <ul>
              {resume.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-heading">
            <h2>Key Achievements</h2>
            <ul>
              {resume.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>References</h2>
            <p>Available upon request.</p>
          </div>
        </div>
      </section>
    </>
  );
}
