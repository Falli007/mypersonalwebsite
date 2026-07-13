import { Router } from 'express';

const router = Router();

interface ContactPayload {
  first_name?: string;
  last_name?: string;
  email?: string;
  message?: string;
}

router.post('/', (req, res) => {
  const { first_name, last_name, email, message } = req.body as ContactPayload;

  if (!first_name || !last_name || !email || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  // No SMTP provider is configured yet - log the enquiry server-side for now.
  // Wire up an email provider (e.g. nodemailer + SMTP env vars) here when ready.
  console.log('New contact form submission:', { first_name, last_name, email, message });

  res.json({ success: true });
});

export default router;
