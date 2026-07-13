import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <>
      <header className="hero">
        <div className="container">
          <img src="/images/Fredrick_Alli_photo.jpeg" alt="Fredrick Alli" className="profile-picture" />
          <h1>Contact Me</h1>
          <p>
            I'm here to help you with your data needs. Whether you have a question, need
            assistance, or want to discuss a project, feel free to reach out!
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>How Can I Assist You?</h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Email:</strong> <a href="mailto:analyst.fred20@gmail.com">analyst.fred20@gmail.com</a>
            </p>
            <div className="tag-list">
              <a href="https://www.linkedin.com/in/fredrick-alli-ab8192206/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Falli007" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="form-card">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" name="first_name" type="text" placeholder="Your first name" required />
              </div>
              <div className="form-row">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" name="last_name" type="text" placeholder="Your last name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="What can I help you with?" required />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && <p className="form-status success">Thanks for reaching out! I'll be in touch soon.</p>}
              {status === 'error' && <p className="form-status error">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
