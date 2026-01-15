import React, { useState, useEffect } from "react";

function Home() {
  // 🔁 1. List of hero images (put these files in /public)
  const heroImages = [
    "tennis1.jpg",
    "tennis2.jpg",
    "tennis3.jpg",
    "tennis4.jpg",
    "tennis5.jpg",
    "tennis6.jpg",
    "tennis7.jpg",
    "tennis8.jpg",
    "tennis9.jpg",
    "tennis10.jpg",
  ];

  // 🔁 2. State for which image is shown
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // 🔁 3. Change image every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  // ⬇️ 4. Your JSX stays here
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">

            <div className="hero-eyebrow">
            <img
              src={`${import.meta.env.BASE_URL}gwtc-logo.png`}
              alt="GWTC logo"
              className="hero-logo"
            />

              <p className="eyebrow">Welcome to</p>
            </div>


            <h2>Glen Waverley Tennis Club</h2>

            {/* fixed structure: no h2/p inside p */}
            <p className="hero-address">
              626 Waverley Road Glen Waverley, Vic 3150
            </p>
            <br />
            <p className="hero-subtitle">Play. Learn. Compete. Belong.</p>

            <div className="hero-actions">
              <a href="/membership" className="btn btn-primary">
                Join Now
              </a>
  
              <a href="/coaching" className="btn btn-outline">
                Coaching Programs
              </a>
                <a href="/location" className="btn btn-outline">
                    Location Map
                  </a>

            </div>

          </div>

          {/* 🔁 Hero carousel replaces static tennis2.jpg */}
          <div className="hero-image-placeholder">
            <img
             src={`${import.meta.env.BASE_URL}${heroImages[currentHeroIndex]}`}
              alt="Tennis club hero"
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
          <div className="hero-image-placeholder1">
            <img
              src="oldTennis1.jpg"
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
