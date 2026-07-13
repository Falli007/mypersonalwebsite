import { Router } from 'express';
import { resumeData } from '../data/resume.js';

declare module 'express-session' {
  interface SessionData {
    resumeAuthorized?: boolean;
  }
}

const router = Router();

const RESUME_PASSWORD = process.env.RESUME_PASSWORD;

router.post('/login', (req, res) => {
  if (!RESUME_PASSWORD) {
    res.status(500).json({ error: 'Resume access is not configured on the server.' });
    return;
  }

  const { password } = req.body as { password?: string };
  if (password === RESUME_PASSWORD) {
    req.session.resumeAuthorized = true;
    res.json({ authorized: true });
    return;
  }

  res.status(401).json({ error: 'Incorrect password.' });
});

router.post('/logout', (req, res) => {
  req.session.resumeAuthorized = false;
  res.json({ authorized: false });
});

router.get('/status', (req, res) => {
  res.json({ authorized: Boolean(req.session.resumeAuthorized) });
});

router.get('/', (req, res) => {
  if (!req.session.resumeAuthorized) {
    res.status(403).json({ error: 'Not authorized.' });
    return;
  }
  res.json(resumeData);
});

export default router;
