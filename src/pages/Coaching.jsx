import React from "react";

function Coaching() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Coaching & Programs</h1>
        <p className="page-subtitle">
          Professional coaching for juniors, adults and competition players.
        </p>
      </header>

      <section className="section">
        <h2>Meet Our Coaching Team</h2>
        <p>
          Our coaching program is led by experienced, accredited coaches who
          work with junior and adult players across all levels.
        </p>
      </section>

      <section className="section">
        <h2>Programs</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Junior Coaching</h3>
            <p>
              Age-based squads focusing on fundamentals, coordination and
              matchplay for players 5–18.
            </p>
          </div>
          <div className="feature-card">
            <h3>Adult Coaching</h3>
            <p>
              Group sessions for new and returning players looking to improve
              technique and confidence.
            </p>
          </div>
          <div className="feature-card">
            <h3>Private Lessons</h3>
            <p>
              One-on-one coaching tailored to your goals and schedule.
            </p>
          </div>
          <div className="feature-card">
            <h3>Holiday Clinics</h3>
            <p>
              Fun and active school holiday programs for juniors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coaching;
