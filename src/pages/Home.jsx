import React from "react";

function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Welcome to</p>
            <h1>Glen Waverley Tennis Club</h1>
            <p className="hero-subtitle">
              <h2 className="hero-address"> 626 Waverley Road Glen Waverley, Vic 3150</h2>
          
              <p> Play. Learn. Compete. Belong.</p>
            </p>
            <div className="hero-actions">
              <a href="/membership" className="btn btn-primary">
                Join Now
              </a>
              <a href="/book-court" className="btn btn-outline">
                Book a Court
              </a>
              <a href="/coaching" className="btn btn-ghost">
                Coaching Programs
              </a>
            </div>
          </div>
          <div className="hero-image-placeholder">
            <img
              src="tennis2.jpg"
              alt="Group of tennis players on court"
              className="hero-image"
            />
</div>

        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">At a Glance</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎾</div>
              <h3>Social Tennis</h3>
              <p>
                Friendly, flexible sessions for all skill levels. Meet new
                people and enjoy the game.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👟</div>
              <h3>Coaching</h3>
              <p>
                Junior and adult coaching programs led by qualified coaches.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Competitions</h3>
              <p>
                Junior, senior and night competitions for casual and serious
                players.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Court Hire</h3>
              <p>
                Book courts online, day or night, at affordable local-club
                rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section section-alt">
        <div className="container split">
          <div>
            <h2>About the Club</h2>
            <p>
              Glen Waverley Tennis Club is a welcoming community club in
              Melbourne’s eastern suburbs. We offer tennis for all ages and
              abilities, from beginners picking up a racquet for the first time
              to experienced competitors.
            </p>
            <a href="/about" className="link">
              Learn more about us →
            </a>
          </div>
          <div className="hero-image-placeholder">

          <img
    src="tennis1.jpg"
    alt="Tennis courts surrounded by trees"
    className="hero-image"
  />


          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
