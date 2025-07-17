import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Keval Siddhapura</h1>
        <p className="subtitle">Frontend Developer • Learner • Creative Thinker</p>
      </header>

   <div className="section">
  <h2>About Me</h2>
  <p>
    I’m <strong>Keval Siddhapura</strong>, currently pursuing my Master of Computer Applications (MCA) at <strong>Mumbai University</strong> through GNIMS College.
    I hold a certification in <strong>Computer Networks and Internet Protocols</strong>, which has helped me build a strong foundation in networking and system architecture.
  </p>
  <p>
    My academic journey is driven by a deep interest in <strong>cloud computing</strong> and <strong>modern app development technologies</strong>. I have successfully completed two academic projects, applying practical knowledge to real-world scenarios.
  </p>
  <p>
    I'm also comfortable using tools like <strong>Git and GitHub</strong> for version control and collaboration. I continuously seek opportunities to expand my skills and contribute to innovative, tech-driven solutions.
  </p>
</div>

<div className="section">
  <h2>Technical Proficiencies</h2>
  <div className="skills-grid">
    <span>Computer Networks & Internet Protocols</span>
    <span>Flutter App Development</span>
    <span>Cloud Technologies (AWS/GCP)</span>
    <span>Git & GitHub</span>
    <span>Academic Project Development</span>
  </div>
</div>

      <section className="section">
        <h2>Certificates</h2>
        <ul className="certificate-list">
          <li><a href="/certificates/web-dev.pdf" target="_blank">Web Development Certificate</a></li>
          <li><a href="/certificates/react-course.pdf" target="_blank">React.js Course Certificate</a></li>
          <li><a href="/certificates/react-course.pdf" target="_blank">Computer Network and Internet Protocol</a></li>

        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: <a href="ksiddhapura07@gmail.com"></a>ksiddhapura07@gmail.com</p>
        <p>GitHub: <a href="https://github.com/Keval-27" target="_blank">https://github.com/Keval-27</a></p>
      </section>

      <footer className="footer">
        <p>© 2025 Keval Siddhapura. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
