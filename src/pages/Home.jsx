import ClubGrid from '../componenets/ClubGrid';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* College Header */}
      <header className="header">
        <h1>St. PETER'S ENGINEERING COLLEGE</h1>
        <p>UGC Autonomous | Affiliated to JNTU Hyderabad</p>
      </header>

      {/* Navigation / Menu */}
      <nav className="nav-bar">
        <a href="/">Home</a>
        <a href="#about">About Student Gymkhana</a>
        <a href="https://spechyd.ac.in/" target="_blank" rel="noopener noreferrer">University Site</a>
      </nav>

      {/* About Section */}
<section className="about-section" id="about">
  <h2>About Student Gymkhana</h2>
  <div className="about-card">
    <div className="about-logo">
      <img src="/college-logo.png" alt="College Logo" />
    </div>
    

    <div className="about-text">
      <p>
        Students are the life and soul of all educational enterprise. At the SPEC College,
        students have the unique opportunity of not just witnessing an Institution in the
        making but participating in the making as well. Winston Churchill once said that
        we shape our Institution and these in turn shape our lives. The heady experience
        of joining hands with...
      </p>
    </div>
  </div>
</section>


      {/* Main Section */}
      <main className="main-section">
        <div className="college-logo">
        </div>
        <h2>Explore Our 12 Amazing Clubs</h2>
        <ClubGrid />
      </main>

      

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 St. Peter’s Engineering College | Designed by Vishnu Vardhan</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="mailto:info@spechyd.ac.in">
            <img src="/email.png" alt="Email" />
          </a>
          <a href="https://spechyd.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src="/university.png" alt="University Site" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
