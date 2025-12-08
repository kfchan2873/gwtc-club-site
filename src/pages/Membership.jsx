import React from "react";

function Membership() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Membership</h1>
        <p className="page-subtitle">
          Join a friendly, active tennis community with programs for all ages
          and skill levels.
        </p>
      </header>

      <section className="section">
        <h2>Why Become a Member?</h2>
        <ul className="bullet-list">
          <li>Unlimited social tennis sessions</li>
          <li>Member rates for coaching</li>
          <li>Eligibility for competitions</li>
          <li>Online court bookings</li>
          <li>Welcoming, family-friendly atmosphere</li>
        </ul>
      </section>

      <section className="section">
        <h2>Membership Options</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Adult</h3>
            <p className="price">$XXX / year</p>
            <ul>
              <li>Social and competition play</li>
              <li>Member rates for coaching</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3>Junior</h3>
            <p className="price">$XXX / year</p>
            <ul>
              <li>For players under 18</li>
              <li>Coaching and junior comps</li>
            </ul>
          </div>

          <div className="pricing-card featured">
            <h3>Family</h3>
            <p className="price">$XXX / year</p>
            <ul>
              <li>Best value for households</li>
              <li>2 adults + juniors</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3>Social / Casual</h3>
            <p className="price">$XXX / year or casual</p>
            <ul>
              <li>Access to social sessions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>How to Join</h2>
        <ol className="numbered-list">
          <li>Choose the membership category that suits you.</li>
          <li>Complete the club membership form.</li>
          <li>Make payment and start playing!</li>
        </ol>
      </section>
    </div>
  );
}

export default Membership;
