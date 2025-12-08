import React from "react";

function Contact() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p className="page-subtitle">
          Have a question about membership, coaching, or court hire? Get in
          touch.
        </p>
      </header>

      <section className="section split">
        <div>
          <h2>Club Details</h2>
          <p>
            Glen Waverley Tennis Club<br />
            Glen Waverley, Victoria, Australia
          </p>
          <p>
            Email: info@glenwaverleytennis.com.au<br />
            Phone: 04xx xxx xxx
          </p>
        </div>

        <div>
          <h2>Send a Message</h2>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a demo form. Hook it to a backend later.");
            }}
          >
            <label>
              Name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea rows="4" required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
