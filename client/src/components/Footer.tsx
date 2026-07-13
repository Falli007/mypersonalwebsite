export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} FA Grace Consulting Ltd. All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/fredrick-alli-ab8192206/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Falli007" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
