import React from "react";

function NewsEvents() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>News & Events</h1>
        <p className="page-subtitle">
          Stay up to date with announcements, competitions and club activities.
        </p>
      </header>

      <section className="section">
        <p>
          In a full build, this page would be powered by a blog or CMS. For
          now, you can manually list key updates and upcoming events.
        </p>
        <ul className="bullet-list">
          <li>Example: Club championships – date and registration info.</li>
          <li>Example: Term coaching enrolments now open.</li>
          <li>Example: Social BBQ night – all members welcome.</li>
        </ul>
      </section>
    </div>
  );
}

export default NewsEvents;
