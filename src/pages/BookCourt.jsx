import React from "react";

function BookCourt() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Book a Court</h1>
        <p className="page-subtitle">
          Book courts online for casual play, practice or matches.
        </p>
      </header>

      <section className="section">
        <h2>How It Works</h2>
        <ol className="numbered-list">
          <li>Create an account or log in to the booking system.</li>
          <li>Select your preferred date and time.</li>
          <li>Confirm your booking and payment.</li>
          <li>Receive your access details and enjoy your hit.</li>
        </ol>
      </section>

      <section className="section">
        <h2>Booking Link</h2>
        <p>
          When live, this page will link directly to the club&apos;s online
          booking system (e.g. Tennis Australia&apos;s Book a Court).
        </p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={(e) => e.preventDefault()}
        >
          Go to Booking System (placeholder)
        </a>
      </section>
    </div>
  );
}

export default BookCourt;
