import express from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import contactRouter from './routes/contact.js';
import resumeRouter from './routes/resume.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const isProduction = process.env.NODE_ENV === 'production';

const sessionSecret = process.env.SESSION_SECRET;
if (isProduction && !sessionSecret) {
  throw new Error('SESSION_SECRET environment variable must be set in production.');
}

if (!isProduction) {
  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
}

app.use(express.json());
app.use(
  session({
    secret: sessionSecret ?? 'dev-only-session-secret-do-not-use-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: isProduction,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  }),
);

app.use('/api/contact', contactRouter);
app.use('/api/resume', resumeRouter);

if (isProduction) {
  const clientDist = path.join(__dirname, '../../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (${isProduction ? 'production' : 'development'})`);
});
