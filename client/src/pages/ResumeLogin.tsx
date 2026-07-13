import { useState, type FormEvent } from 'react';

interface ResumeLoginProps {
  onAuthorized: () => void;
}

export default function ResumeLogin({ onAuthorized }: ResumeLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/resume/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? 'Incorrect password.');
      }

      onAuthorized();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="login-box">
          <h1>Enter Password to View Resume</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Checking…' : 'Submit'}
            </button>
            {error && <p className="form-status error">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
